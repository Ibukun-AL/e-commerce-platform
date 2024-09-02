// app/layout.tsx
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "E-Commerce Platform",
  description: "An e-commerce platform built with Next.js, TypeScript, and Tailwind CSS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
