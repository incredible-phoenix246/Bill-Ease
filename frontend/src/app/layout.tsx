import type { Metadata } from "next";
import "../styles/globals.scss";
import { nunito } from "@/fonts";
import ThemeProvider from "@/context/ThemeCtx";

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
        <body className={nunito.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
