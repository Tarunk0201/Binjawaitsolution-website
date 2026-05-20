import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./componetns/Navbar";
import Footer from "./componetns/Footer";
import HomePage from "./componetns/pages/HomePage";
import AboutPage from "./componetns/pages/AboutPage";
import ContactPage from "./componetns/ContactPage";
import FullStackDevelopment from "./componetns/pages/FullStackDevelopment";
import DigitalMarketing from "./componetns/pages/DigitalMarketing";
import AgenticAI from "./componetns/pages/AgenticAI";
import Compliance from "./componetns/pages/Compliance";
import LegalNotice from "./componetns/LegalNotice";
import BlogPage from "./componetns/Blog/BlogPage";
import AllBlogsPage from "./componetns/Blog/AllBlogsPage";
import JobPage from "./componetns/JobPage";
import JobDetailsPage from "./componetns/JobDetailsPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white overflow-x-hidden">
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/full-stack-development"
              element={<FullStackDevelopment />}
            />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/ai-solutions" element={<AgenticAI />} />
            <Route path="/compliance" element={<Compliance />} />
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            <Route path="/jobs" element={<JobPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/blogs" element={<AllBlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<LegalNotice />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
