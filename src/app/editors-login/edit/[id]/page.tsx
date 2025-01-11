"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import HeroSection from "../../publish-new-article/components/HeroSection";
import Header from "@/app/components/Header";
import NewsletterForm from "@/app/components/NewsLetterForm";
import Footer from "@/app/components/Footer";
import { ArticleEditor } from "../../publish-new-article/components/article-editor";



export default function EditArticlePage() {
  const searchParams = useSearchParams(); // Use search params to dynamically extract `id`
  const {id }= useParams();
   // Destructure the `id` from params
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      try {
        const authToken = Cookies.get("authToken");
        console.log(authToken);
        if (!authToken) {
          throw new Error("Authentication token not found in cookies");
        }

        const url = `https://api.newszai.com/api/news/${id}`;
        const response = await fetch(url, {
          method: "GET",
          headers:  {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
console.log("hi")
        const data = await response.json();
        setArticle(data); // Update state with the fetched article
      } catch (err:any) {
        console.error("Failed to fetch article:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <ArticleEditor article={article} />
      <NewsletterForm />
      <Footer />
    </div>
  );
}
