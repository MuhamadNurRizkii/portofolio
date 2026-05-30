import { motion } from "motion/react";
import { FiArrowDownRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brutal-cream noise-bg flex items-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(#1a1a1a 1px, transparent 1px),
              linear-gradient(90deg, #1a1a1a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-4 border-brutal-black bg-brutal-yellow hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-20 h-20 bg-brutal-pink border-4 border-brutal-black rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-brutal-blue border-4 border-brutal-black hidden lg:block"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="font-mono text-sm font-bold bg-brutal-yellow text-brutal-black px-4 py-2 border-3 border-brutal-black shadow-[4px_4px_0px_#1a1a1a]">
                ★ CREATIVE DEVELOPER
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-grotesk font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brutal-black leading-[0.9] tracking-tight mb-6"
            >
              I BUILD
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">DIGITAL</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-1 left-0 h-4 sm:h-5 bg-brutal-pink z-0"
                />
              </span>
              <br />
              THINGS<span className="text-brutal-pink">.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-mono text-sm sm:text-base text-brutal-black/70 max-w-md mb-8 leading-relaxed"
            >
              Fullstack developer yang passionate dalam membangun website yang
              unik, fungsional, dan memorable. Tidak ada yang biasa-biasa saja.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ x: -4, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 font-mono font-bold text-sm bg-brutal-black text-brutal-yellow px-6 py-4 border-3 border-brutal-black shadow-[6px_6px_0px_#ffe156] hover:shadow-[10px_10px_0px_#ffe156] transition-shadow"
              >
                VIEW PROJECTS
                <FiArrowDownRight className="text-lg" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: -4, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 font-mono font-bold text-sm bg-brutal-white text-brutal-black px-6 py-4 border-3 border-brutal-black shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[10px_10px_0px_#1a1a1a] hover:bg-brutal-yellow transition-all"
              >
                CONTACT ME
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Brutalist card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=" lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-brutal-black text-brutal-cream p-8 border-4 border-brutal-black shadow-[12px_12px_0px_#ffe156]">
                <div className="font-mono text-xs text-brutal-yellow mb-4">
                  // portfolio.jsx
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    {`const developer = {
  name: "Muhamad Nur Rizki",
  role: "Fullstack Dev",
  university: "Universitas Pamulang"
};`}
                  </code>
                </pre>
                <div className="mt-4 flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-brutal-red" />
                  <span className="w-3 h-3 rounded-full bg-brutal-yellow" />
                  <span className="w-3 h-3 rounded-full bg-brutal-green" />
                </div>
              </div>

              {/* Floating sticker */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 right-0 bg-brutal-pink text-brutal-black font-mono font-bold text-xs px-4 py-2 border-3 border-brutal-black shadow-[3px_3px_0px_#1a1a1a] rotate-12"
              >
                HIRE ME! ✦
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 lg:mt-24 overflow-hidden border-t-4 border-b-4 border-brutal-black bg-brutal-yellow py-3"
        >
          <div className="animate-marquee whitespace-nowrap flex">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="font-mono font-bold text-sm text-brutal-black mx-8 flex items-center gap-8"
              >
                <span>★ REACT.JS</span>
                <span>★ TAILWIND CSS</span>
                <span>★ JAVASCRIPT</span>
                <span>★ GIT</span>
                <span>★ NODE.JS</span>
                <span>★ TYPESCRIPT</span>
                <span>★ EXPRESS.JS</span>
                <span>★ REACT.JS</span>
                <span>★ TAILWIND CSS</span>
                <span>★ JAVASCRIPT</span>
                <span>★ GIT</span>
                <span>★ NODE.JS</span>
                <span>★ TYPESCRIPT</span>
                <span>★ EXPRESS.JS</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
