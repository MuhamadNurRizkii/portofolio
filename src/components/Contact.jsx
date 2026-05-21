import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <FiMail />, label: "EMAIL", value: "mgrrizki123@gmail.com" },
    { icon: <FiPhone />, label: "PHONE", value: "+62 821 3471 1403" },
    { icon: <FiMapPin />, label: "LOCATION", value: "Tangerang, Indonesia" },
  ];

  const socials = [
    {
      icon: <FiGithub />,
      label: "GitHub",
      href: "https://github.com/MuhamadNurRizkii",
      color: "bg-brutal-black text-brutal-cream",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhamad-nur-rizki-5ba0a4319/",
      color: "bg-brutal-blue text-brutal-black",
    },
    {
      icon: <FiInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/mnurrizkii_/",
      color: "bg-brutal-pink text-brutal-black",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative top-14 py-24 sm:py-32 bg-brutal-white noise-bg"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm font-bold bg-brutal-orange text-brutal-black px-3 py-1 border-3 border-brutal-black shadow-[3px_3px_0px_#1a1a1a]">
              04
            </span>
            <div className="h-0.75 w-16 bg-brutal-black" />
          </div>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-brutal-black tracking-tight">
            CONTACT<span className="text-brutal-pink">.</span>
          </h2>
          <p className="font-mono text-sm text-brutal-black/60 mt-4 max-w-lg">
            Punya project menarik? Mari kolaborasi! Jangan ragu untuk
            menghubungi saya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-brutal-cream p-6 sm:p-8 border-4 border-brutal-black shadow-[8px_8px_0px_#1a1a1a]"
            >
              <h3 className="font-mono font-bold text-lg mb-6">
                {">"} SEND_MESSAGE<span className="animate-pulse">_</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="font-mono text-xs font-bold block mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name..."
                    className="w-full font-mono text-sm px-4 py-3 bg-brutal-white border-3 border-brutal-black shadow-[4px_4px_0px_#1a1a1a] focus:shadow-[6px_6px_0px_#1a1a1a] focus:outline-none focus:bg-brutal-yellow/20 transition-all placeholder:text-brutal-black/30"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs font-bold block mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full font-mono text-sm px-4 py-3 bg-brutal-white border-3 border-brutal-black shadow-[4px_4px_0px_#1a1a1a] focus:shadow-[6px_6px_0px_#1a1a1a] focus:outline-none focus:bg-brutal-yellow/20 transition-all placeholder:text-brutal-black/30"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs font-bold block mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full font-mono text-sm px-4 py-3 bg-brutal-white border-3 border-brutal-black shadow-[4px_4px_0px_#1a1a1a] focus:shadow-[6px_6px_0px_#1a1a1a] focus:outline-none focus:bg-brutal-yellow/20 transition-all resize-none placeholder:text-brutal-black/30"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ x: -4, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full flex items-center justify-center gap-2 font-mono font-bold text-sm bg-brutal-black text-brutal-yellow px-6 py-4 border-3 border-brutal-black shadow-[6px_6px_0px_#ffe156] hover:shadow-[10px_10px_0px_#ffe156] transition-shadow"
              >
                SEND MESSAGE <FiSend />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ x: -4, y: -4 }}
                className="flex items-center gap-4 bg-brutal-cream p-5 border-3 border-brutal-black shadow-[5px_5px_0px_#1a1a1a] hover:shadow-[9px_9px_0px_#1a1a1a] transition-shadow"
              >
                <div className="w-12 h-12 bg-brutal-yellow border-3 border-brutal-black flex items-center justify-center text-xl shrink-0">
                  {info.icon}
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-brutal-black/50">
                    {info.label}
                  </span>
                  <p className="font-grotesk font-bold text-brutal-black">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="relative top-0.5 pt-4">
              <h4 className="font-mono font-bold text-sm mb-4">FOLLOW ME</h4>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -4, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 ${social.color} border-3 border-brutal-black shadow-[4px_4px_0px_#1a1a1a] flex items-center justify-center text-xl hover:shadow-[6px_6px_0px_#1a1a1a] transition-shadow`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Brutalist CTA */}
            <motion.div
              whileHover={{ rotate: -1 }}
              className="mt-6 bg-brutal-yellow p-6 border-4 border-brutal-black shadow-[8px_8px_0px_#1a1a1a]"
            >
              <h4 className="font-mono font-bold text-lg mb-2">
                LET'S WORK TOGETHER! ✦
              </h4>
              <p className="font-grotesk text-sm text-brutal-black/70">
                Saya selalu terbuka untuk diskusi project baru, ide kreatif,
                atau kesempatan kolaborasi.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
