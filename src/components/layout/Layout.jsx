import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function Layout({ children }) {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
