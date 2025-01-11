import NewsCarousel from "@/app/components/NewsSlider";
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
  <HeroSection>
  <h1 className="font-an font-semibold lg:text-5xl text-4xl relative pb-4 max-w-[1056px] mx-auto lg:leading-[64px]">
              Stay Updated with Breaking News from Across the Nation
            </h1>
            <p className="pb-6 max-w-[1056px] mx-auto font-py text-2xl  font-normal">
            Catch the latest stories shaping the nation, from in-depth coverage of 
local events to comprehensive insights on national affairs. Watch 
live video updates, explore trending stories, and never miss 
out on what’s happening around you.
            </p>

            <div className="flex lg:flex-row flex-col justify-center items-center gap-4 font-p text-xl font-bold ">
              <a
                href="/"
                className="px-6 py-5 font-semibold  group relative  text-white bg-black rounded-[161px] hover:bg-white hover:text-black hover:shadow-[0px_0px_10px_6px_#00000014] transition-all duration-300 ease-in-out"
              >
                Explore Top Stories<svg className="ml-2 inline" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  className="group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M10.7833 10.7836C10.9239 10.643 11.1147 10.564 11.3136 10.564C11.5125 10.564 11.7033 10.643 11.8439 10.7836L21.8778 20.8175L21.8778 14.1424C21.8742 14.0417 21.891 13.9414 21.927 13.8473C21.9631 13.7533 22.0178 13.6675 22.0877 13.595C22.1577 13.5226 22.2415 13.4649 22.3342 13.4256C22.4269 13.3862 22.5266 13.3659 22.6273 13.3659C22.728 13.3659 22.8277 13.3862 22.9204 13.4256C23.0131 13.4649 23.097 13.5226 23.1669 13.595C23.2369 13.6675 23.2915 13.7533 23.3276 13.8473C23.3636 13.9414 23.3804 14.0417 23.3768 14.1424V22.6277C23.3767 22.8264 23.2977 23.017 23.1572 23.1575C23.0166 23.2981 22.8261 23.3771 22.6273 23.3772L14.142 23.3772C14.0414 23.3807 13.941 23.364 13.847 23.3279C13.753 23.2919 13.6671 23.2372 13.5947 23.1673C13.5222 23.0973 13.4646 23.0135 13.4252 22.9208C13.3859 22.8281 13.3656 22.7284 13.3656 22.6277C13.3656 22.5269 13.3859 22.4273 13.4252 22.3345C13.4646 22.2418 13.5222 22.158 13.5947 22.0881C13.6671 22.0181 13.753 21.9635 13.847 21.9274C13.941 21.8913 14.0414 21.8746 14.142 21.8781L20.8171 21.8781L10.7833 11.8443C10.6426 11.7036 10.5636 11.5129 10.5636 11.314C10.5636 11.115 10.6426 10.9243 10.7833 10.7836Z" fill="white"/>
</svg>

              </a>
              
            </div>
  </HeroSection>
  <FeaturesSection/>
 <TopStroies/>


 <LatestNews/>
 <TodaysEdition/>
 <NewsletterForm/>
 <Footer/>
<NewsCarousel/>
    </div>
   
  );
}
