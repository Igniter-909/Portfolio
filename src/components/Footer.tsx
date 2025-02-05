import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaInstagram, FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://leetcode.com", icon: <SiLeetcode /> },
  { href: "https://codechef.com", icon: <SiCodechef /> },
];



const Footer = () => {
  return (
    <footer className="w-full bg-[#09152f] text-white py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-6">
          
          <h3 className="text-sm sm:text-2xl font-bold mb-0 sm:mb-4">Let's Connect!</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200 text-sm sm:text-2xl hover:text-blue-500"
            >
              <FaLinkedin />
            </a>

            <a 
              href="mailto:your-email@example.com"
              className="transform hover:scale-110 transition-transform duration-200 text-sm sm:text-2xl hover:text-red-500"
            >
              <FaEnvelope />
            </a>

            <a 
              href="https://discord.com/users/your-id"
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200 text-sm sm:text-2xl hover:text-indigo-500"
            >
              <FaDiscord />
            </a>

            <a 
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer" 
              className="transform hover:scale-110 transition-transform duration-200 text-sm sm:text-2xl hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a 
              href="tel:+1234567890"
              className="transform hover:scale-110 transition-transform duration-200 text-sm sm:text-2xl hover:text-green-500"
            >
              <FaPhone />
            </a>

            <a 
              href="https://leetcode.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200 text-sm sm:text-2xl hover:text-orange-500"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://codechef.com/users/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200 text-sm sm:text-2xl hover:text-purple-500"
            >
              <SiCodechef />
            </a>
          </div>


          <div className="mt-6 text-center text-xs sm:text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Roshan Kumar Sahu. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;