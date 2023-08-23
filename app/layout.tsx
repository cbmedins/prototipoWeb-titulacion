import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Sistema Predictivo de Enfermedades Cardiovasculares",
  description:
    "Proyecto de titulación previa a la obtención del título de: INGENIERO EN SISTEMAS COMPUTACIONALES",
  twitter: {
    card: "summary_large_image",
    title: "Sistema Predictivo de Enfermedades Cardiovasculares",
    description:
      "Proyecto de titulación previa a la obtención del título de: INGENIERO EN SISTEMAS COMPUTACIONALES",
    creator: "@cbmedins",
  },
  metadataBase: new URL("https://codytech.dev/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-orange-50 via-white to-red-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
