import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import MotionEnhancer from "./components/MotionEnhancer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://roof-and-more.example";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roof & More | Design, Engineering and Construction",
    template: "%s | Roof & More",
  },
  description:
    "Premium architecture, structural engineering, interiors, project management, construction, industrial roofing and PEB solutions for Indore, India and international opportunities.",
  keywords: [
    "Roof and More Indore",
    "architecture firm in Indore",
    "interior designer in Indore",
    "structural engineering services",
    "construction project management",
    "industrial roofing solutions",
    "PEB buildings",
    "warehouse construction",
    "factory shed construction",
  ],
  icons: {
    icon: "/images/official/roof-and-more-logo.png",
    shortcut: "/images/official/roof-and-more-logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Roof & More",
    title: "Roof & More | Design Intelligence and Construction Excellence",
    description:
      "Integrated architecture, engineering, interiors, construction management, roofing and PEB solutions.",
    images: ["/images/official/commercial-office-project-01.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof & More",
    description:
      "Architecture, engineering, interiors, construction, roofing and PEB solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionEnhancer />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
