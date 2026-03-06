import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, UserCheck, FlaskConical, Medal, Calendar, ClipboardCheck, HeartPulse, CheckCircle, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";
import whyResearchImg from "@/assets/why-research.jpg";
import servicesImg from "@/assets/services.jpg";
import video from "@/assets/hero.mp4";

const stats = [
  { icon: Users, number: "5000+", label: "Patients", desc: "Delivering exceptional clinical research options to over 5000+ patients." },
  { icon: UserCheck, number: "20+", label: "Expert Staff", desc: "Supported by a dedicated team of 10+ expert clinical research staff." },
  { icon: FlaskConical, number: "100+", label: "Clinical Trials", desc: "Conducting 100+ clinical trials with precision, advancing healthcare." },
  { icon: Medal, number: "30+", label: "Years Experience", desc: "Combined Clinical Experience — Advancing HealthCare Every Day!" },
];

const steps = [
  { icon: Calendar, title: "Initial Consultation", desc: "Your journey starts with an initial consultation. Meet the research team, discuss your medical history, and learn about the study's purpose." },
  { icon: ClipboardCheck, title: "Assessment & Eligibility", desc: "A thorough assessment to check if you are a fit for the study based on certain criteria." },
  { icon: HeartPulse, title: "Active Participation", desc: "Active participation can range from taking new treatments to regular health check-ups." },
];

const services = [
  "PRX Research is a premier community based institution designated to offer comprehensive range of clinical research services",
  "PRX has inpatient and outpatient capabilities and utilizes a central IRB with quick regulatory approvals.",
  "Clinical research is the vital engine propelling healthcare advancements.",
];

const specialties = [
  "Clinical Research", "Internal Medicine", "Orthopedics & Pain Management", "Pulmonary Medicine",
  "Cardiology", "Gastroenterology", "Endocrinology", "Psychiatry", "Neurology", "Devices", "Geriatrics", "Lab Collection Studies",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--teal)/0.1),_transparent_60%)]" />
        {/* Floating particles */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-teal blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-orange blur-3xl"
        />

        <div className="container relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="section-label text-teal mb-4 tracking-[0.2em]"
              >
                ADVANCING HEALTHCARE THROUGH INNOVATION
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
              >
                Welcome to{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-teal"
                >
                  PRX Research
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed"
              >
                PRX is a research facility designed to meet the growing medical needs of North Texas residents, offering comprehensive health services for acute and emergency situations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/about"
                  className="gradient-orange inline-flex items-center gap-2 text-accent-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-orange/30"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Right: Video */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary-foreground/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                  poster={heroBg}
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              {/* Decorative frame */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-teal/20 -z-10"
              />
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-orange/20 -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div {...fadeUp} className="lg:col-span-1 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold mb-3">WHO WE ARE</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We leverage cutting-edge research technologies and practices to stay at the forefront of medicine.
              </p>
              <Link to="/about" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1 group">
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-background rounded-xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all"
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  </motion.div>
                  <p className="font-heading text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="font-heading font-semibold text-sm text-foreground mt-1">{stat.label}</p>
                  <p className="text-muted-foreground text-xs mt-2">{stat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clinical Research */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <SectionHeader label="Process" title="Why Clinical Research?" description="Clinical research is crucial because it's the path to medical advancements. It tests new treatments, ensuring they are safe and effective." centered={false} />
              <div className="space-y-6 mt-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-4 group cursor-default"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl gradient-teal flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={whyResearchImg}
                  alt="Clinical research"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl gradient-teal opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl gradient-orange opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card overflow-hidden">
        <div className="container">
          <SectionHeader label="What We Offer" title="Our Services" description="At PRX Clinical Research, our mission is to translate biomedical discoveries into cutting-edge healthcare solutions." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              {...scaleIn}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src={servicesImg}
                alt="Medical services"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-default"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground text-sm">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-24 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--teal)/0.1),_transparent_50%)]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-primary-foreground/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full border border-primary-foreground/5"
        />
        <div className="container relative z-10 text-center">
          <motion.div {...fadeUp}>
            <p className="section-label text-teal mb-3">Get Started</p>
            <h2 className="section-title text-primary-foreground mb-4">Make an Appointment</h2>
            <p className="section-description mx-auto text-primary-foreground/70 mb-8">
              Embarking on your journey to better health starts with a single step. Schedule your appointment now.
            </p>
          </motion.div>
          <motion.a
            href="mailto:admin@prxresearch.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-orange inline-flex items-center gap-2 text-accent-foreground px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-orange/30"
          >
            Make an Appointment <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Sub-Specialties */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeader label="Our Expertise" title="Our Sub-Specialties" description="Explore our specialized departments where cutting-edge care meets personalized treatment." />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specialties.map((spec) => (
              <motion.div
                key={spec}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02, borderColor: "hsl(var(--primary))" }}
                className="p-5 rounded-xl bg-card border border-border text-center hover:shadow-lg transition-all cursor-default"
              >
                <p className="text-sm font-medium text-foreground">{spec}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card">
        <div className="container text-center">
          <SectionHeader label="Contact Us" title="Get In Touch" description="If you have any questions or need further information about our services, don't hesitate to contact us." />
          <motion.div {...scaleIn} className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.520414742655!2d-96.60302222591133!3d32.77845778391519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea5a26213fadd%3A0x29323264f04d05d2!2s1011+N+Galloway+Ave%2C+Mesquite%2C+TX+75149%2C+USA!5e0!3m2!1sen!2s!4v1700766161493!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PRX Research Location"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
