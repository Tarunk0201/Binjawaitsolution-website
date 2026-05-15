import React, { useState, useEffect } from "react";
import { href, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Wrench, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesMenuOpen, setMobileServicesMenuOpen] = useState(false);
  const location = useLocation();

  // Pages with a dark hero image that need white text at the top
  const darkHeroRoutes = ["/"];
  const isDarkHeroPage = darkHeroRoutes.includes(location.pathname);

  const atTop = !scrolled;
  const useWhiteText = isDarkHeroPage && atTop;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      subLinks: [
        {
          name: "Web & App Development Suite",
          href: "/full-stack-development",
        },
        { name: "Agentic AI Solutions", href: "/ai-solutions" },
        { name: "Digital Marketing", href: "/digital-marketing" },
        { name: "Compliance Solutions", href: "/compliance" },
      ],
    },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const NavLink = ({ link }) => {
    const isActive = location.pathname === link.href;
    return (
      <Link
        to={link.href}
        className={`relative flex items-center gap-1 text-sm font-medium transition-colors duration-200 pb-0.5
          ${
            useWhiteText
              ? "text-white hover:text-gray-200"
              : "text-gray-600 hover:text-black"
          }
          ${isActive && !atTop && "text-black"}
        `}
      >
        {link.name}
        {link.subLinks && <ChevronDown size={16} />}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        atTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="w-screen px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <img src="/logo.png" alt="FixFlow" className="h-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setServicesMenuOpen(true)}
                onMouseLeave={() => link.subLinks && setServicesMenuOpen(false)}
              >
                <NavLink link={link} />
                {link.subLinks && (
                  <AnimatePresence>
                    {servicesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-lg shadow-xl p-4"
                      >
                        <div className="flex flex-col gap-1">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              onClick={() => setServicesMenuOpen(false)}
                              className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:8103174722"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-md"
            >
              <Phone size={16} />
              <span>+91 81031 74722</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                useWhiteText ? "text-white" : "text-gray-600"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setMobileServicesMenuOpen(!mobileServicesMenuOpen)
                      }
                      className="w-full flex justify-center items-center py-2 text-base font-medium text-gray-700 hover:text-black"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`ml-1 transition-transform ${
                          mobileServicesMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesMenuOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-2 pl-4 flex flex-col items-center space-y-2">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.href}
                                className="block text-center py-2 text-base font-medium text-gray-600 hover:text-black"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-center py-2 text-base font-medium text-gray-700 hover:text-black"
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <a
                href="tel:1245678900"
                className="block w-full text-center bg-orange-500 text-white px-6 py-3 rounded-md text-base font-medium"
              >
                +91 98266 56189
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
