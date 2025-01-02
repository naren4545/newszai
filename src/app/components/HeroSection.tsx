import Image from "next/image";

import bannerImg from "../../../public/herosectinbg.png";
import topright from "../../../public/top-right.png";
export default function HeroSection({children}:any) {
  return (
    <section>
      <div className="relative py-10">
        <div className="absolute top-0 right-0 lg:hidden z-[-1]">
          <Image
            src={topright} // Change to your image path
            alt="Top Right Overlay"
            className="object-cover w-[100px] md:w-fit" // Use object-cover to maintain aspect ratio
          />
        </div>
        {/* Bottom Left Image */}
        <div className="absolute bottom-0 left-0 lg:hidden z-[-1]">
          <Image
            src={topright} // Change to your image path
            alt="Bottom Left Overlay"
            className="object-cover w-[100px] md:w-fit" // Use object-cover to maintain aspect ratio
          />
        </div>

        <div className="image lg:block hidden relative z-[-1]">
          <Image src={bannerImg} className="w-full" alt="banner" />
        </div>

        <div className=" lg:absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="text-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
