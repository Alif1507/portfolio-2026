import "@fontsource-variable/sora";
import "../src/index.css";
import "../src/styles/hero.css";
import "../src/styles/loader.css";
import "../src/components/CertificationsCarousel.css";
import "../src/components/assets/ProfileCard.css";
import ClientShell from "./client-shell";

const siteUrl = "https://www.alifwahyudi.my.id";
const description =
  "Portfolio of Muhammad Alif Wahyudi, a full-stack web and mobile developer and UI/UX designer building thoughtful digital products.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Alif Wahyudi | Full-Stack Developer & UI/UX Designer",
    template: "%s | Muhammad Alif Wahyudi",
  },
  description,
  applicationName: "MAW Portfolio",
  keywords: [
    "Muhammad Alif Wahyudi",
    "MAW developer",
    "full-stack developer Indonesia",
    "web developer",
    "mobile developer",
    "UI UX designer",
    "frontend developer portfolio",
  ],
  authors: [{ name: "Muhammad Alif Wahyudi", url: siteUrl }],
  creator: "Muhammad Alif Wahyudi",
  publisher: "Muhammad Alif Wahyudi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muhammad Alif Wahyudi Portfolio",
    title: "Muhammad Alif Wahyudi | Full-Stack Developer & UI/UX Designer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Alif Wahyudi | Full-Stack Developer & UI/UX Designer",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
