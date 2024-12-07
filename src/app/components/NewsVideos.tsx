import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function NewsVideos({videoSrc, thumbnailSrc}:{videoSrc: string, thumbnailSrc: string}) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
