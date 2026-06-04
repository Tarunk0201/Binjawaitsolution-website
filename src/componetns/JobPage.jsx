import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Briefcase,
  ChevronDown,
  Clock,
  ArrowRight,
} from "lucide-react";

const JobPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobType, setJobType] = useState("Jobs");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [availableJobTypes, setAvailableJobTypes] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/openings`,
        );
        const data = await response.json();
        setJobs(data);
        const types = [...new Set(data.map((job) => job.type))];
        setAvailableJobTypes(types);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    let tempJobs = [...jobs];

    // 1. Filter by search term
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      tempJobs = tempJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(lowercasedTerm) ||
          job.category.toLowerCase().includes(lowercasedTerm) ||
          job.location.toLowerCase().includes(lowercasedTerm),
      );
    }

    // 2. Filter by job type
    if (jobType !== "Jobs") {
      tempJobs = tempJobs.filter((job) => job.type === jobType);
    }

    // 3. Sort the jobs
    if (sortOrder === "Category") {
      tempJobs.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortOrder === "Oldest") {
      // The API provides jobs sorted by newest first, so we can reverse the array for oldest.
      tempJobs.reverse();
    }
    // 'Newest' is the default order from the API, so no action is needed.

    setFilteredJobs(tempJobs);
  }, [jobs, searchTerm, jobType, sortOrder]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>Job Openings | Binjwa IT Solutions</title>
        <meta
          name="description"
          content="Find your next career opportunity at Binjwa IT Solutions. Browse our open positions and apply today."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Find Your <span className="text-orange-500">Next Opportunity</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Browse through our open positions and find the perfect fit for your
            career.
          </p>
        </header>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search admin/office"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition bg-white"
              >
                <option>Jobs</option>
                {availableJobTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-bold">{filteredJobs.length}</span>{" "}
            search results
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort By:</span>
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="pl-3 pr-8 py-1.5 border border-gray-200 rounded-md text-sm font-medium appearance-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition bg-white"
              >
                <option>Newest</option>
                <option>Oldest</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredJobs.map((job) => (
            <motion.div
              key={job._id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <Link to={`/job/${job._id}`} className="block h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          job.logo ||
                          "https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                        }
                        alt={`${job.category} logo`}
                        className="w-12 h-12 rounded-lg object-contain"
                      />
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">
                          {job.title}
                        </h2>
                        <p className="text-sm text-gray-500">{job.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex-grow">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin size={16} className="mr-2 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          job.type === "Full time"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1.5" />
                      <span>{job.posted}</span>
                    </div>
                    <div className="flex items-center text-orange-600 font-semibold">
                      <span>Apply Now</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default JobPage;
