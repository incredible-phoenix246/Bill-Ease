import type { Metadata } from "next";
import "../styles/globals.scss";
import {
  nunito,
  manrope,
  montserrat,
  radioCanada,
  workSans,
  openSans,
  poppins,
} from "@/fonts";
import ThemeProvider from "@/context/ThemeCtx";
import { RoundThemeButton } from "@/components/theme";
import { Toaster } from "@/components/ui/toaster";
import StateContextProvider from "@/context/StateCtx";
import SwipeIndicator from "@/components/miscellaneous/SwipeIndicator";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: {
    default: "Bill Ease: Simplify Your Billing and Invoicing",
    template: `%s - BillEase`,
  },
  description:
    "BillEase is a versatile application designed to streamline the creation of receipts, invoices, and various payment-related documents. Whether you're a small business owner, freelancer, or enterprise, BillEase provides an intuitive and efficient solution for managing your billing needs. With user-friendly features, customizable templates, and seamless integration with your financial workflows, BillEase ensures that you can create professional documents with ease. Simplify your billing process and enhance your business operations with BillEase.",
  twitter: {
    title: "Bill Ease",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <StateContextProvider>
          <Providers>
            <body
              className={`${nunito.className} ${montserrat.variable} ${manrope.variable} ${workSans.variable} ${radioCanada.variable} ${openSans.variable} ${poppins.variable} dark:bg-dark-background bg-background dark:text-background text-dark-background transition-colors duration-300`}
            >
              {children}
              <RoundThemeButton />
              <SwipeIndicator />
              <Toaster />
            </body>
          </Providers>
        </StateContextProvider>
      </ThemeProvider>
    </html>
  );
}
