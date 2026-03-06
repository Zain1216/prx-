import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = true }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-10 ${centered ? "text-center" : ""}`}
  >
    <p className="section-label mb-2">{label}</p>
    <h2 className="section-title mb-3">{title}</h2>
    {description && (
      <p className={`section-description ${centered ? "mx-auto" : ""}`}>{description}</p>
    )}
  </motion.div>
);

export default SectionHeader;
