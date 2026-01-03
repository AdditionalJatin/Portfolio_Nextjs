import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jatin Garg - Java Backend Developer | Portfolio",
  description: "Portfolio of Jatin Garg, a Java Backend Developer specializing in Spring Boot, REST APIs, Microservices, and building robust backend solutions. 3rd year B.Tech student from AKGEC.",
  keywords: ["Jatin Garg", "Java Backend Developer", "Spring Boot", "REST API", "Microservices", "Portfolio", "AKGEC"],
  authors: [{ name: "Jatin Garg" }],
  openGraph: {
    title: "Jatin Garg - Java Backend Developer",
    description: "Portfolio showcasing backend development projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
