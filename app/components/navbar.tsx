import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-between py-8 bg-white/5 backdrop-blur-md border-r border-white/10 shadow-[8px_0_30px_rgba(0,0,0,0.1)] z-50">
      {/* Logo */}
      <div className="w-full flex justify-center">
        <Link href="/" className="text-white text-2xl font-bold tracking-tighter" style={{ fontFamily: 'Cal Sans' }}>
          MG
        </Link>
      </div>

      {/* Primary Links */}
      <div className="flex flex-col gap-12 items-center text-gray-300">
        <Link 
          href="/" 
          className="hover:text-white transition-colors duration-300 tracking-widest text-sm font-medium"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Home
        </Link>
        <Link 
          href="/projects" 
          className="hover:text-white transition-colors duration-300 tracking-widest text-sm font-medium"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className="hover:text-white transition-colors duration-300 tracking-widest text-sm font-medium"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col gap-6 items-center text-gray-400">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          <FaInstagram size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          <FaLinkedin size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          <FaTwitter size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          <FaGithub size={20} />
        </a>
      </div>

    </nav>
  );
}
