import { motion } from "framer-motion";
import Eyebrow from "@/components/site/Eyebrow";

export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, children, center = false }) {
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-heading text-[32px] font-medium leading-[1.15] text-[#14333C] md:text-[46px]">{title}</h2>
      {children && <p className="mt-5 text-[17px] leading-relaxed text-[#5A6B6E]">{children}</p>}
    </Reveal>
  );
}