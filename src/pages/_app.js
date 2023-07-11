import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
// slick
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Import Swiper styles
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import dynamic from 'next/dynamic';

const BoardDynamic = dynamic(() => import('./../components/Home/PopularCourses'), {
  ssr: false,
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
