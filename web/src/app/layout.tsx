import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
// import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/auth-provider";
import { CartProvider } from "@/modules/cart/context/cart-context";
import { CheckoutProvider } from "@/modules/checkout/context/checkout-context";
import { satoshi } from "./(pages)/fonts";
import Footer from "@/components/footer/footer";
import { LanguageProvider } from "@/hooks/LanguageContext";
import Header from "@/components/header/header";
import SiteTimer from "@/components/SiteTimer/SiteTimer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://only-georgian.vercel.app'),
  title: "OnlyGeorgian",
  description:
    "OnlyGeorgian - მხოლოდ საქართველოში წარმოებული პროდუქციის ონლაინ პლატფორმა, სადაც შეგიძლიათ გაყიდოთ და შეიძინოთ მხოლოდ ქართული პროდუქცია",
  openGraph: {
    type: 'website',
    locale: 'ka_GE',
    url: 'https://only-georgian.vercel.app/',
    siteName: 'onlyGeorgian',
    title: 'onlyGeorgian',
    images: [
      {
        url: '/mainImg.png',
        width: 1200,
        height: 630,
        alt: 'onlyGeorgian Sharing Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'onlyGeorgian',
    description:
      'onlyGeorgian - მხოლოდ ქართული პროდუქციის ონლაინ პლატფორმა',
    images: ['/mainImg.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* Facebook SDK */}
        <script
          async
          defer
          crossOrigin="anonymous"
          src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0&appId=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&autoLogAppEvents=1`}
        />
        {/* Prefetch non-critical images */}
        <link
          rel="prefetch"
          href="http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdsufx8uzd%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Cw_1024%2Fv1743141951%2Fecommerce%2Fezpkajmvijgztiswc18p.png&w=640&q=75"
          as="image"
        />
        <link
          rel="prefetch"
          href="http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdsufx8uzd%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Cw_1024%2Fv1743115400%2Fecommerce%2Fwmny5jfzplylecdoct9f.jpg&w=640&q=75"
          as="image"
        />
        <link
          rel="prefetch"
          href="http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdsufx8uzd%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Cw_1024%2Fv1743145178%2Fecommerce%2Fbzxnlhaspyu3tkofccov.jpg&w=640&q=75"
          as="image"
        />
      </head>
      <body className={`${satoshi.variable} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <AuthProvider>
            <CartProvider>
              <CheckoutProvider>
                <LanguageProvider>
                  <SiteTimer />
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </LanguageProvider>
              </CheckoutProvider>
            </CartProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
