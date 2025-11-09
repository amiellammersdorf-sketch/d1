// app/layout.tsx
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "D1",
  description: "D1 Print Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="font-akkurat text-brand bg-white">
        {children}
      </body>
    </html>
  );
}
