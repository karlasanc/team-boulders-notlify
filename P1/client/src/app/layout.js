import { Outfit } from "next/font/google"; // import font
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Team Boulder - Notflix",
  description: "Entertainment Web App",
};

export default function RootLayout({ children }) {
  return (
    // Attach font to global JSX node
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
