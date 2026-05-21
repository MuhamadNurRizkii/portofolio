import { motion } from "motion/react";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative top-16 bg-brutal-black text-brutal-cream border-t-4 border-brutal-yellow">
      {/* Marquee */}
      <div className="overflow-hidden bg-brutal-yellow py-2 border-b-4 border-brutal-black">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="font-mono font-bold text-xs text-brutal-black mx-4 flex items-center gap-6"
            >
              <span>✦ AVAILABLE FOR WORK</span>
              <span>✦ LET'S COLLABORATE</span>
              <span>✦ FRONTEND DEVELOPER</span>
              <span>✦ BRUTALIST DESIGN</span>
              <span>✦ AVAILABLE FOR WORK</span>
              <span>✦ LET'S COLLABORATE</span>
              <span>✦ FRONTEND DEVELOPER</span>
              <span>✦ BRUTALIST DESIGN</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-mono font-bold text-2xl text-brutal-yellow mb-4">
              {"<RIZKI/>"}
            </h3>
            <p className="font-grotesk text-sm text-brutal-cream/60 leading-relaxed">
              Frontend developer yang passionate dalam membangun pengalaman
              digital yang unik dan memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold text-sm text-brutal-yellow mb-4">
              QUICK LINKS
            </h4>
            <nav className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block font-mono text-sm text-brutal-cream/60 hover:text-brutal-yellow hover:pl-2 transition-all"
                  >
                    → {link.toUpperCase()}
                  </a>
                ),
              )}
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-mono font-bold text-sm text-brutal-yellow mb-4">
              BUILT WITH
            </h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "Motion", "Vite"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-bold bg-brutal-cream/10 text-brutal-cream px-3 py-1 border border-brutal-cream/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t-2 border-brutal-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-brutal-cream/40">
            © {new Date().getFullYear()} MUHAMAD NUR RIZKI. ALL RIGHTS RESERVED.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-brutal-yellow text-brutal-black border-3 border-brutal-cream flex items-center justify-center shadow-[4px_4px_0px_#f5f0e8] hover:shadow-[6px_6px_0px_#f5f0e8] transition-shadow"
            aria-label="Back to top"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
