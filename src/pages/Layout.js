import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Index";
import Navbar from "@/components/Navbar/Navbar";
import OffCanvas from "@/components/OffCanvas";
import Preloader from "@/components/Preloader/Preloader";
import ToTop from "@/components/ToTop/ToTop";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          await new Promise((resolve) => setTimeout(resolve, 3000));
    
          setLoading(false);
          const styleLoading = {};
        }; 
        fetchData();
      }, [title]);

      
  return (
    <div className="main">
      {loading && <Preloader />}
      <Navbar />
      {children}
      <Footer />
      <ToTop/>
      <OffCanvas/>
      <Modal/>
    </div>
  );
};

export default Layout;
