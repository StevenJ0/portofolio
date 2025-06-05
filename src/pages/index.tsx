import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPageViews from "@/components/views/landingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LandingPageViews />
  );
}
