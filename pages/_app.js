import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
