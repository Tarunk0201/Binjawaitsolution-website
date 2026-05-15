import { Link } from "react-router-dom";
import {
  Wrench,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
  PhoneCall,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const serviceAreas = [
    { name: "Website building", path: "/services/website-building" },
    { name: "Application Development", path: "/services/app-development" },
    { name: "AI Services", path: "/services/ai-services" },
    { name: "CRM Development", path: "/services/crm-development" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Compliance Solutions", path: "/services/compliance-solutions" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/binjwa-it-solutions-pvt-ltd/posts/?feedView=all",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/people/Binjwaitsolutions/61577198437265/?rdid=pV4ce5snhhLqxgMb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16cSpGxWmS%2F",
    },
    { icon: Instagram, href: "https://www.instagram.com/binjwaitsolutions/" },
    {
      icon: Twitter,
      href: "https://x.com/BinjwaITSolutio?t=RiZkuNAkfF1y2zY6hdegtQ&s=08",
    },
    // { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-[#456080] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1: Logo, Description, Socials */}
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <img src="/logo.png" alt="FixFlow" className="h-16" />
            </Link>
            <p className="text-white text-sm leading-relaxed">
              We provide complete IT solutions including websites, apps, CRM, AI
              automation, digital marketing, and compliance support to help
              businesses build, manage, and grow efficiently.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-1 shrink-0" />
                <span className="text-white">
                  301, Atulya IT park, Indore, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white shrink-0" />
                <a
                  href="mailto:contact@fixflow.com"
                  className="text-white hover:text-white transition-colors"
                >
                  binjwaitsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white shrink-0" />
                <a
                  href="tel:9826656189"
                  className="text-white hover:text-white transition-colors"
                >
                  +91 98266 56189
                </a>
                <a
                  href="tel:8103174722"
                  className="text-white hover:text-white transition-colors"
                >
                  +91 81031 74722
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-200 text-sm">
          <p>
            &copy; {new Date().getFullYear()} binjwa it solutions. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
