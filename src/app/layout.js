import "./globals.css";
import Navbar from "./components/Navbar";
import ClientWrapper from "./components/client-wrapper";

export const metadata = {
  title: "Abu Bakar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-dark bg-cover bg-no-repeat bg-center">
        <ClientWrapper>
          <Navbar />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
