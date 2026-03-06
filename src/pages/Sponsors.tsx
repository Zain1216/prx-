import { motion } from "framer-motion";
import { Search, Stethoscope, PlayCircle, UserRound, Database, UsersRound, Server } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import sponsorsHero from "@/assets/sponsors-hero.jpg";
import servicesImg from "@/assets/services.jpg";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const howItWorks = [
  { icon: Search, title: "Find A Clinical Trial", desc: "Getting started is easy! We offer numerous clinical trials in different specialties. Contact us to see what we're offering. We'll ask you some questions to determine eligibility and schedule an appointment." },
  { icon: Stethoscope, title: "Physical Assessment", desc: "Visit our site and get a complimentary physical exam. We'll answer any questions you have about participating in one of our clinical trials." },
  { icon: PlayCircle, title: "Start Participating", desc: "Participating can begin once you've been considered eligible and agree to participate in the study procedures." },
];

const therapeuticAreas = [
  { title: "Clinical Research", desc: "Our team is committed to clinical research that tests the latest medical treatments, striving for healthcare breakthroughs." },
  { title: "Internal Medicine", desc: "The medical specialty dealing with the prevention, diagnosis, and treatment of adult diseases." },
  { title: "Orthopedics & Pain Management", desc: "Diligently testing new treatments to bring about breakthroughs in patient care for musculoskeletal conditions." },
  { title: "Pulmonary Medicine", desc: "Dedicated to advancing the treatment of respiratory diseases through clinical research." },
  { title: "Cardiology", desc: "Deals with disorders of the heart and the cardiovascular system including diagnosis and treatment." },
  { title: "GI & Hepatology", desc: "Advancing GI and liver health through innovative treatments and diagnostics." },
  { title: "Endocrinology", desc: "Advancing knowledge and treatments for hormone-related disorders." },
  { title: "Psychiatry", desc: "Devoted to the diagnosis, prevention, and treatment of mental disorders." },
  { title: "Neurology", desc: "Dealing with disorders of the nervous system including brain, spinal cord and peripheral nerves." },
  { title: "Devices", desc: "Creating cutting-edge medical technologies that enhance patient care." },
  { title: "Geriatrics", desc: "Improving the well-being of older adults with innovative solutions and tailored care." },
  { title: "Lab Collection Studies", desc: "Meticulously gathering and analyzing data in controlled labs for research advancement." },
];

const workingProcess = [
  { icon: UserRound, title: "Expert Physicians", desc: "Providing Physicians from Varying Therapeutic Areas to serve as Clinical Research Investigators" },
  { icon: Database, title: "Real-Time Data", desc: "Providing Access to Insights on Real-Time Data and Updates to Ensure Compliance" },
  { icon: UsersRound, title: "Community Engagement", desc: "Engaging The Local Community, Physicians, and Patients for Effective Recruitment" },
  { icon: Server, title: "Quality Infrastructure", desc: "Providing Infrastructure and Expertise to Ensure Better Data Quality in Real Time" },
];

const phases = [
  { phase: "Phase 1", desc: "Researchers test a drug or treatment in a small group of people (20-100) for the first time to study safety and identify side effects." },
  { phase: "Phase 2", desc: "Given to a larger group (100-300) to determine effectiveness and further study safety." },
  { phase: "Phase 3", desc: "Given to large groups (1,000-3,000) to confirm effectiveness, monitor side effects, and compare with standard treatments." },
  { phase: "Phase 4", desc: "After FDA approval, researchers track safety in the general population, seeking more information about benefits and optimal use." },
];

const Sponsors = () => (
  <>
    <PageHero title="Sponsors & Clinical Trials" subtitle="Learn about our clinical trials, therapeutic areas, and working process" backgroundImage={sponsorsHero} />

    {/* How It Works */}
    <section className="py-20 bg-card overflow-hidden">
      <div className="container">
        <SectionHeader label="Process" title="How It Works" description="Participating in a clinical trial is easy with PRX Research" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorks.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="text-center bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl gradient-teal flex items-center justify-center mx-auto mb-4"
              >
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h4 className="font-heading font-semibold mb-3">{step.title}</h4>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image below how it works */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            src={servicesImg}
            alt="Clinical research process"
            className="w-full h-[350px] object-cover"
          />
        </motion.div>
      </div>
    </section>

    {/* Therapeutic Areas */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeader label="Our Expertise" title="Therapeutic Areas" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {therapeuticAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-default"
            >
              <h5 className="font-heading font-semibold text-primary text-sm uppercase tracking-wide mb-2">{area.title}</h5>
              <p className="text-muted-foreground text-sm">{area.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Working Process */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeader label="Why Choose Us" title="Our Working Process" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workingProcess.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="text-center p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h4 className="font-heading font-semibold text-sm mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Study Phases */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeader label="Learn" title="Study Phases" description="Clinical trials have four phases. Here's what those phases mean:" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {phases.map((p) => (
            <motion.div
              key={p.phase}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
            >
              <h3 className="font-heading text-xl font-bold text-primary mb-3">{p.phase}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </>
);

export default Sponsors;
