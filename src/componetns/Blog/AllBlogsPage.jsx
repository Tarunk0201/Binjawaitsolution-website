import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  ArrowUpRight,
  Eye,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  Grid,
  Sparkles,
} from "lucide-react";

// This static data will be replaced by the API call
// const ALL_BLOG_POSTS = [ ... ];

const POSTS_PER_PAGE = 9;

export default function AllBlogsPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(
          `${baseUrl}/api/blogs?page=${currentPage}&limit=${POSTS_PER_PAGE}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPosts(result.data);
        setTotalPages(result.pagination.totalPages || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Pagination calculation indices (no longer needed as API handles pagination)
  // const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  // const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  // const currentPosts = ALL_BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen pt-32 py-16 px-4 md:px-8">
      <Helmet>
        <title>Our Blog | Binjawa IT Solutions</title>
        <meta
          name="description"
          content="Explore the latest insights, updates, and strategies from our experts at Binjawa IT Solutions. Stay informed on industry trends and best practices."
        />
      </Helmet>
      {/* Dynamic Upper Intro Header Panel Block */}
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/60 pb-8">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-amber-600 font-bold tracking-widest uppercase text-xs mb-3">
            <Sparkles size={14} />
            <span>Insight Library</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Our Complete <span className="text-amber-600">Publications.</span>
          </h1>
        </div>
        <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
          Deep-dives, updates, and corporate strategies curated explicitly by
          our compliance experts to guide your scaling roadmap.
        </p>
      </div>

      {/* Main Container Layer Wrapper */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center text-gray-500">Loading posts...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : (
          <>
            {/* Post Display Layout Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {posts.map((post) => (
                <motion.div variants={staggerItem} key={post.id}>
                  <Link to={`/blog/${post.id}`}>
                    <div className="flex flex-col group bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
                      {/* Image Box Container with Fixed Isolation Box to avoid Arrow Cutoff */}
                      <div className="relative mb-5">
                        {/* overflow hidden applied isolated cleanly here */}
                        <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Floating Action Button - Placed inside structural node, outside masking layer */}
                        <div className="absolute bottom-0 right-4 translate-y-1/2 p-3.5 rounded-xl bg-gray-900 text-white shadow-md z-10 group-hover:bg-orange-600 transition-all duration-300 cursor-pointer">
                          <ArrowUpRight
                            size={18}
                            className="transform group-hover:rotate-45 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Text Context Content Stack Container */}
                      <div className="px-1 pt-2 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 tracking-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <div className="flex items-center gap-2.5 mb-3">
                          <hr className="w-8 border-gray-900 transition-all group-hover:w-12 group-hover:border-orange-600 duration-300" />
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors">
                            {post.category}
                          </span>
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
                          {post.summary}
                        </p>

                        {/* Footer Metrics Row Block */}
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                          <div className="flex items-center gap-1.5 ml-auto">
                            <Calendar size={13} />
                            {/* Extracting date from meta string */}
                            <span>
                              {post.meta
                                .split("·")[0]
                                .replace("Hosted by", "")
                                .trim()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Dynamic Pagination Control Panel Engine */}
            <div className="flex items-center justify-center gap-2 mt-20">
              {/* Previous Page Arrow Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2.5 rounded-xl border border-gray-200 transition-all ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dynamic Page Integer Indicator Nodes Panel */}
              <div className="flex items-center gap-1 mx-2 text-sm font-bold">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNum = index + 1;

                  // Smart truncation for clean viewing parameters on expansive dynamic counts
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3.5 py-2 rounded-xl transition-all ${
                          currentPage === pageNum
                            ? "bg-gray-900 text-white shadow-sm"
                            : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }

                  if (pageNum === 2 || pageNum === totalPages - 1) {
                    return (
                      <span key={pageNum} className="px-2 text-gray-300">
                        ...
                      </span>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Next Page Arrow Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2.5 rounded-xl border border-gray-200 transition-all ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
