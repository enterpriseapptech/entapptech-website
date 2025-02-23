import LandingPageUI from "@/components/page/LandingPageUI";
import { ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({}: Props, parent: ResolvingMetadata) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // generate metadata
  const metadata = {
    title: "ENTAPP TECH",
    description: "Transforming businesses through tailored software solutions.",
    openGraph: {
      title: "ENTAPP TECH",
      description:
        "Transforming businesses through tailored software solutions.", 
      images: [
        "https://i.ibb.co/FDKV2gG/Hero-Section-2.png",
        ...previousImages,
      ].filter(Boolean),
    },
  };

  return metadata;
}

export default function LandingPage() {
  return <LandingPageUI />;
}
