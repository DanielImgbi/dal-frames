import LandingPage from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destiny's Art Lab - Frames",
  description:
    "Transform your vision into stunning digital experiences. We specialize in branding, web development, mobile apps, UI/UX design, 3D modeling, and architectural design.",
  keywords:
    "digital agency, web development, mobile apps, branding, UI/UX design, 3D modeling, architectural design, graphic design, digital marketing",
  authors: [{ name: "Destiny's Art Lab" }],
  openGraph: {
    title: "Destiny's Art Lab - Digital Design & Development Agency",
    description: "Crafting digital masterpieces that inspire and engage",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <LandingPage />;
}
