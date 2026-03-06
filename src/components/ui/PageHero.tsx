import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    {backgroundImage ? (
      <>
        <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/70" />
      </>
    ) : (
      <>
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--teal)/0.15),_transparent_60%)]" />
      </>
    )}
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
    {/* Decorative animated elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange blur-3xl"
    />
  </section>
);

export default PageHero;
