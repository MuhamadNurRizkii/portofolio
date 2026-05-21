import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "MONEY TRACKING",
    desc: "Platform penglola keuangan sehari hari untuk memantau pemasukkan dan pengeluaran.",
    tags: ["React", "Express", "MySQL", "Tailwind"],
    color: "bg-brutal-yellow",
    accent: "#ffe156",
    link: "https://money-tracking-apps.vercel.app/",
    github: "https://github.com/MuhamadNurRizkii/money-tracking-app",
  },
  {
    title: "SISTEM KASIR SEDERAHAN",
    desc: "Aplikasi Kasir sederhana untuk melakukan transaksi dan menambah barang/produk.",
    tags: ["React", "Supabase", "Shadcn UI"],
    color: "bg-brutal-pink",
    accent: "#ff6b9d",
    link: "https://sistem-kasir-mu.vercel.app/products",
    github: "https://github.com/MuhamadNurRizkii/sistem-kasir",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative top-10 py-24 sm:py-32 bg-brutal-black noise-bg"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm font-bold bg-brutal-pink text-brutal-black px-3 py-1 border-3 border-brutal-cream shadow-[3px_3px_0px_#f5f0e8]">
              03
            </span>
            <div className="h-0.75 w-16 bg-brutal-cream" />
          </div>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-brutal-cream tracking-tight">
            PROJECTS<span className="text-brutal-yellow">.</span>
          </h2>
          <p className="font-mono text-sm text-brutal-cream/50 mt-4 max-w-lg">
            Beberapa project yang telah saya kerjakan. Setiap project adalah
            cerita unik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              className={`group relative ${project.color} border-4 border-brutal-cream shadow-[8px_8px_0px_${project.accent}] hover:shadow-[12px_12px_0px_${project.accent}] transition-shadow overflow-hidden`}
              style={{
                boxShadow:
                  hoveredIndex === i
                    ? `12px 12px 0px ${project.accent}`
                    : `8px 8px 0px ${project.accent}`,
              }}
            >
              {/* Project number */}
              <div className="absolute top-4 right-4 font-grotesk font-bold text-6xl text-brutal-black/10">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="p-6 sm:p-8 relative">
                <h3 className="font-mono font-bold text-lg sm:text-xl text-brutal-black mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="font-grotesk text-sm text-brutal-black/70 mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs font-bold bg-brutal-black text-brutal-cream px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-brutal-black text-brutal-cream border-2 border-brutal-black flex items-center justify-center hover:bg-brutal-cream hover:text-brutal-black transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-brutal-black text-brutal-cream border-2 border-brutal-black flex items-center justify-center hover:bg-brutal-cream hover:text-brutal-black transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
