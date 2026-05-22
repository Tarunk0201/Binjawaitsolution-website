import { Link } from "react-router-dom";
import { Youtube, Mail, MapPin, Phone } from "lucide-react";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const integrations = [
    { name: "AI Services", path: "/ai-solutions" },
    { name: "Website building", path: "/full-stack-development" },
    { name: "Compliance Solutions", path: "/compliance" },
    { name: "Digital Marketing", path: "/digital-marketing" },
  ];

  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/binjwa-it-solutions-pvt-ltd/posts/?feedView=all",
    },
    { icon: FaInstagram, href: "https://www.instagram.com/binjwaitsolutions/" },
    {
      icon: FaXTwitter,
      href: "https://x.com/BinjwaITSolutio?t=RiZkuNAkfF1y2zY6hdegtQ&s=08",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/people/Binjwaitsolutions/61577198437265/?rdid=pV4ce5snhhLqxgMb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16cSpGxWmS%2F",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@BinjwaITCompleteSolutions",
    },
  ];

  return (
    <footer className="bg-[#456080] text-gray-200 text-sm py-4">
      <div className="container mx-auto px-6 lg:px-0 max-w-7xl">
        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 items-start">
          {/* Column 1: Logo & Company Branding */}
          <div className="flex flex-col space-y-5 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="FixFlow"
                className="h-20 object-contain"
              />
            </Link>
            <p className="text-gray-300 text-xs leading-relaxed max-w-xs md:hidden lg:block">
              Complete Digital Solution under one Roof
            </p>
          </div>

          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 justify-around w-full">
            {/* Column 2: Integrations */}
            <div>
              <h4 className="text-gray-400 font-medium mt-4 mb-2 tracking-wide">
                Service Areas
              </h4>
              <ul className="space-y-3 font-medium text-white">
                {integrations.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-gray-400 font-medium mt-4 mb-2 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-3 font-medium text-white">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="">
              <h3 className="text-gray-400 font-medium mt-4 mb-2 tracking-wide">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-white mt-1 shrink-0" />
                  <span className="text-white text-xs">
                    <span className="font-bold">Head</span> - 301, Atulya IT
                    park, Indore, Madhya Pradesh, India
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-white mt-1 shrink-0" />
                  <span className="text-white text-xs">
                    Block B, Tf-14, Signet Plaza, Gotri, Vadodara, Gujarat.
                    India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-white shrink-0" />
                  <a
                    href="mailto: binjwaitsolutions@gmail.com"
                    className="text-white text-xs hover:text-white transition-colors"
                  >
                    binjwaitsolutions@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-white shrink-0" />
                  <a
                    href="mailto:info@binjwaitsolutions.com"
                    className="text-white text-xs hover:text-white transition-colors"
                  >
                    info@binjwaitsolutions.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-white shrink-0" />
                  <a
                    href="tel:9826656189"
                    className="text-white text-xs hover:text-white transition-colors"
                  >
                    +91 98266 56189
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-white shrink-0" />
                  <a
                    href="tel:8103174722"
                    className="text-white text-xs hover:text-white transition-colors"
                  >
                    +91 81031 74722
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-white shrink-0" />
                  <a
                    href="tel:7974147736"
                    className="text-white text-xs hover:text-white transition-colors"
                  >
                    +91 7974147736
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 5: Right Side Actions & Dynamic Buttons */}
          <div className="flex flex-col space-y-6 lg:items-end lg:col-span-1 md:col-span-2 lg:text-right">
            <div className="w-full lg:max-w-xs h-50 rounded-lg overflow-hidden shadow-lg">
              <a
                href="https://maps.app.goo.gl/G9PAqTyFzQvJDf8U9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.2784485978352!2d75.870815069551!3d22.68680739871317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd82012b6f79%3A0xbb4cbe5a037aa2c1!2sBinjwa%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1779436108461!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>

            {/* Social Icons matching the structured rounded border styling */}
            <div className="flex gap-3 pt-4 lg:justify-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400/30 bg-white/5 hover:bg-white/10 text-white transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Extra Contact Block */}
        <div className="border-t border-white/10 mt-3 pt-3 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>&copy; {currentYear} binjwa it solutions. All Rights Reserved.</p>

          {/* Subtle horizontal reference list for address/phones to maintain clean minimalist design */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center md:text-right max-w-2xl">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> Indore & Vadodara, India
            </span>
            <span className="flex items-center gap-1">
              <Phone size={12} /> +91 98266 56189
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} /> binjwaitsolutions@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
