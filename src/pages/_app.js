import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />;
    </AnimatePresence>
  );
}

export default MyApp;
