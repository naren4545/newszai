import { NewsSlider } from "@/app/components/NewsSlider";
import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";

import TopStroies from "./components/TopStroies";

import LatestNews from "./components/LatestNews";
import TodaysEdition from "./components/TodaysEdition";
import NewsletterForm from "./components/NewsLetterForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header/>
  <HeroSection/>
  <FeaturesSection/>
 <TopStroies/>


 <LatestNews/>
 <TodaysEdition/>
 <NewsletterForm/>
 <Footer/>
    </div>
   
  );
}
