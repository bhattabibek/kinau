import "./globals.css";
import Header from "./components/Header";
import BentoGrid from "./components/BentoGrid";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Topbar />
          <Header />
          <BentoGrid />
         
          <main>{children}</main>
          <ProductCard/>
          <Footer/>
        </body>
      </html>
    </>
  );
}
