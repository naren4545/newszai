"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Article } from "@/app/types/article";
import { ArticleCard } from "./article-card";
import Back from "./Back";

// Skeleton loader for loading state
function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
         <div className="w-full max-w-[1182px] mx-auto rounded-lg border bg-card p-6 py-10 shadow-sm animate-pulse">
         <div className="flex items-center justify-between">
           <div className="flex items-center space-x-4">
             <div className="w-5 h-5 bg-gray-200 rounded"></div>
             <div className="space-y-3">
               <div className="h-8 bg-gray-200 rounded w-64"></div>
               <div className="flex items-center gap-3">
                 <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                 <div className="h-6 bg-gray-200 rounded w-32"></div>
               </div>
             </div>
           </div>
           <div className="flex items-center gap-2 border-gray-200 border rounded-xl px-3 py-4">
             <div className="w-16 h-6 bg-gray-200 rounded"></div>
             <div className="w-16 h-6 bg-gray-200 rounded"></div>
           </div>
         </div>
       </div>
      ))}
    </div>
  );
}

// Fetch news function
async function fetchNews(
  page = 1,
  limit = 5,
  orderBy = "timestamp",
  order = "asc"
) {
  const authToken = Cookies.get("authToken");

  if (!authToken) {
    throw new Error("Authentication token not found in cookies");
  }

  try {
    const url = `https://api.newszai.com/api/news?page=${page}&limit=${limit}&orderBy=${orderBy}&order=${order}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      articles: data.news || [],
      pagination: {
        currentPage: data.pagination.currentPage,
        totalPages: data.pagination.totalPages,
      },
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

interface ArticlesListProps {
  type: "published" | "draft";
}

export function ArticlesList({ type }: ArticlesListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 5,
  });

  // Sorting state
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [orderBy, setOrderBy] = useState<"timestamp" | "category">("timestamp");

  // Selected articles state
  const [selectedArticles, setSelectedArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);

    try {
      const { articles: fetchedArticles, pagination: fetchedPagination } =
        await fetchNews(
          pagination.currentPage,
          pagination.itemsPerPage,
          orderBy,
          order
        );

      setArticles(fetchedArticles);
      setPagination((prev) => ({
        ...prev,
        totalPages: fetchedPagination.totalPages,
      }));
    } catch (error) {
      setError("Failed to fetch articles. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch articles on initial load or when pagination/sorting changes
  useEffect(() => {
    fetchArticles();
  }, [pagination.currentPage, order, orderBy]);

  // Handle page changes
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        currentPage: newPage,
      }));
    }
  };

  // Handle article selection
  const handleSelectChange = (id: string, isSelected: boolean) => {
    const article = articles.find((article) => article.id === id);
    if (!article) return;

    setSelectedArticles((prev) => {
      if (isSelected) {
        // Add to selected articles
        return [...prev, article];
      } else {
        // Remove from selected articles
        return prev.filter((item) => item.id !== id);
      }
    });
  };

  // Handle sorting order change
  const handleOrderChange = (newOrder: "asc" | "desc") => {
    setOrder(newOrder);
  };

  // Render loading state
  // if (loading) {
  //   return(<div className="max-w-[1312px] mx-auto p-6 pb-12"> <SkeletonLoader /></div>);
  // }

  // Render error state
  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1312px] mx-auto p-6 pb-12">
      <div className="py-10 relative">
        <h1 className="md:text-5xl text-lg font-bold text-center ">
          {type === "published" ? "Your Uploaded Content" : "Your Draft"}
        </h1>
        <Back />
      </div>

      {/* Sorting Dropdown */}
      <div className="flex justify-end items-center mb-6">
        <select
          value={order}
          onChange={(e) => handleOrderChange(e.target.value as "asc" | "desc")}
          className="px-4 py-2 border rounded bg-white text-gray-700"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
          
        </select>
      </div>

      <div className="space-y-4">
        { loading ? <SkeletonLoader /> : articles.map((article) => (
          <ArticleCard
            id={article.id}
            key={article.id}
            title={article.headline}
            isSelected={selectedArticles.some((a) => a.id === article.id)}
            onSelectChange={handleSelectChange}
            category={article.category}
            timestamp={article.timestamp}
            onDelete={() => {
              setArticles((prev) =>
                prev.filter((a) => a.id !== article.id)
              );
            }}
          />
        ))}

        {articles.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No {type === "published" ? "articles" : "drafts"} found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1}
          className={`px-4 py-2 rounded transition-all ease-in-out duration-200 ${
            pagination.currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:scale-105"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={pagination.currentPage === pagination.totalPages}
          className={`px-4 py-2 rounded transition-all ease-in-out duration-200 ${
            pagination.currentPage === pagination.totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:scale-105"
          }`}
        >
          Next
        </button>
      </div>

      {/* Debugging: Display selected articles */}
      {/* <div className="mt-8">
        <h2 className="text-lg font-bold">Selected Articles:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(selectedArticles, null, 2)}
        </pre>
      </div> */}
    </div>
  );
}
