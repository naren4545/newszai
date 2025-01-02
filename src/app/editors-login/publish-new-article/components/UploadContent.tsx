import Link from "next/link";

export default function UploadContent() {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 py-16 px-6">
        <h1 className="text-4xl font-semibold  mb-4">
          Upload Your New Content
        </h1>
        <p className="text-center text-2xl max-w-[819px] mx-auto mb-8">
          Subscribe to our daily newsletter for the latest headlines, in-depth reports, 
          and exclusive video stories tailored to your interests. Get the news that 
          matters delivered straight to your inbox.
        </p>
        <Link href={"/editors-login/publish-new-article"} className="px-6 py-3 bg-black text-white text-2xl font-medium rounded-xl hover:bg-gray-800">
          Publish Now
        </Link>
      </div>
    );
  }
  