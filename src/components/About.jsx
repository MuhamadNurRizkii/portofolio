import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FiCode, FiCoffee, FiHeart, FiZap } from "react-icons/fi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // const stats = [
  //   { number: "2+", label: "YEARS EXP", color: "bg-brutal-yellow" },
  //   { number: "15+", label: "PROJECTS", color: "bg-brutal-pink" },
  //   { number: "10+", label: "CLIENTS", color: "bg-brutal-blue" },
  //   { number: "∞", label: "COFFEE", color: "bg-brutal-orange" },
  // ];

  const values = [
    {
      icon: <FiCode />,
      title: "CLEAN CODE",
      desc: "Kode bersih dan terstruktur.",
    },
    {
      icon: <FiZap />,
      title: "FAST & OPTIMAL",
      desc: "Performa adalah prioritas.",
    },
    {
      icon: <FiHeart />,
      title: "PASSION DRIVEN",
      desc: "Coding adalah passion.",
    },
    {
      icon: <FiCoffee />,
      title: "DETAIL ORIENTED",
      desc: "Setiap pixel diperhatikan.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 sm:py-32 bg-brutal-white noise-bg"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm font-bold bg-brutal-blue text-brutal-black px-3 py-1 border-3 border-brutal-black shadow-[3px_3px_0px_#1a1a1a]">
              01
            </span>
            <div className="h-0.75 w-16 bg-brutal-black" />
          </div>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-brutal-black tracking-tight">
            ABOUT<span className="text-brutal-pink">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-brutal-cream p-6 sm:p-8 border-4 border-brutal-black shadow-[8px_8px_0px_#1a1a1a]">
              <h3 className="font-mono font-bold text-lg mb-4 text-brutal-black">
                {">"} WHO_AM_I<span className="animate-pulse">_</span>
              </h3>
              <div className="space-y-4 font-grotesk text-brutal-black/80 leading-relaxed">
                <p>
                  Halo! Saya seorang{" "}
                  <strong className="bg-brutal-yellow px-1">
                    Fullstack Developer
                  </strong>{" "}
                  yang bersemangat membangun pengalaman digital yang unik.
                </p>
                <p>
                  Web development bukan hanya soal fungsionalitas — tapi juga{" "}
                  <strong className="bg-brutal-pink text-brutal-white px-1">
                    seni
                  </strong>
                  , <strong className="bg-brutal-blue px-1">kreativitas</strong>
                  , dan{" "}
                  <strong className="bg-brutal-yellow px-1">ekspresi</strong>.
                </p>
                {/* <p>
                  Dengan fokus pada desain brutalisme dan modern web
                  technologies, saya mengubah ide menjadi produk digital yang
                  bold dan memorable.
                </p> */}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "UI/UX",
                  "Brutalism",
                  "Creative Dev",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs font-bold bg-brutal-black text-brutal-yellow px-3 py-1 border-2 border-brutal-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ x: -4, y: -4 }}
                className="bg-brutal-cream p-5 border-3 border-brutal-black shadow-[5px_5px_0px_#1a1a1a] hover:shadow-[9px_9px_0px_#1a1a1a] transition-shadow cursor-default"
              >
                <div className="text-2xl mb-3 w-10 h-10 bg-brutal-yellow border-2 border-brutal-black flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="font-mono font-bold text-sm mb-2">
                  {value.title}
                </h4>
                <p className="font-grotesk text-sm text-brutal-black/60">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ rotate: -2, scale: 1.05 }}
              className={`${stat.color} p-6 border-4 border-brutal-black shadow-[6px_6px_0px_#1a1a1a] text-center`}
            >
              <div className="font-grotesk font-bold text-4xl sm:text-5xl text-brutal-black">
                {stat.number}
              </div>
              <div className="font-mono font-bold text-xs mt-2 text-brutal-black/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
