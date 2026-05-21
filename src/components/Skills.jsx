import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiNextdotjs,
  SiMongodb,
  SiHtml5,
  SiVite,
} from "react-icons/si";
import { FiLayout } from "react-icons/fi";

const skills = [
  { name: "REACT", icon: <SiReact />, level: 90, color: "bg-brutal-blue" },
  {
    name: "JAVASCRIPT",
    icon: <SiJavascript />,
    level: 85,
    color: "bg-brutal-yellow",
  },
  {
    name: "TYPESCRIPT",
    icon: <SiTypescript />,
    level: 75,
    color: "bg-brutal-blue",
  },
  {
    name: "TAILWIND",
    icon: <SiTailwindcss />,
    level: 90,
    color: "bg-brutal-blue",
  },
  {
    name: "EXPRESS.JS",
    icon: <SiExpress />,
    level: 70,
    color: "bg-brutal-black",
  },
  {
    name: "NODE.JS",
    icon: <SiNodedotjs />,
    level: 65,
    color: "bg-brutal-green",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative top-10 py-24 sm:py-32 bg-brutal-cream noise-bg"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm font-bold bg-brutal-yellow text-brutal-black px-3 py-1 border-3 border-brutal-black shadow-[3px_3px_0px_#1a1a1a]">
              02
            </span>
            <div className="h-0.75 w-16 bg-brutal-black" />
          </div>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-brutal-black tracking-tight">
            SKILLS<span className="text-brutal-pink">.</span>
          </h2>
          <p className="font-mono text-sm text-brutal-black/60 mt-4 max-w-lg">
            Tools dan teknologi yang saya gunakan sehari-hari untuk membangun
            produk digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.07, duration: 0.5 }}
              whileHover={{ y: -8, rotate: -2 }}
              className="group bg-brutal-white p-5 border-4 border-brutal-black shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[10px_10px_0px_#1a1a1a] transition-shadow cursor-default"
            >
              <div
                className={`text-3xl sm:text-4xl mb-4 w-14 h-14 ${skill.color} ${skill.color === "bg-brutal-black" ? "text-brutal-white" : "text-brutal-black"} border-3 border-brutal-black flex items-center justify-center`}
              >
                {skill.icon}
              </div>
              <h3 className="font-mono font-bold text-xs sm:text-sm mb-3">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
