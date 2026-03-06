import { motion } from "framer-motion";
import { CheckCircle, Users, UserCheck, FlaskConical, Medal } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import aboutHero from "@/assets/about-hero.jpg";
import processImg from "@/assets/process.jpg";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const whoWeArePoints = [
  "PRX Research is a premier community based institution designated to offer comprehensive range of clinical research services for acute and emergencies, including a 24-hour Emergency Room; critical care; medical, surgical, stroke, imaging, full-service laboratory, cardiac services, and diagnostic services.",
  "PRX has inpatient and outpatient capabilities and utilizes a central IRB with quick regulatory, contracts, budgeting approvals, and recruitment timelines.",
  "Our experienced team is here to collaborate on your breakthrough and leverage our expertise to turn research into reality, delivering results that matter.",
];

const stats = [
  { icon: Users, number: "5000+", label: "Patients", desc: "Delivering exceptional clinical research options to over 2000+ patients." },
  { icon: UserCheck, number: "20+", label: "Expert Staff", desc: "Supported by a dedicated team of 10+ expert clinical research staff." },
  { icon: FlaskConical, number: "100+", label: "Clinical Trials", desc: "Conducting 100+ clinical trials with precision, advancing healthcare." },
  { icon: Medal, number: "30+", label: "Years", desc: "Combined Clinical Experience — Advancing HealthCare Every Day!" },
];

const processSteps = [
  { title: "Prescreening", desc: "For trials enrolling patients with a particular medical condition, some pre-screening may happen behind-the-scenes. For healthy volunteers, staff explain the trial in detail and gather more information during the pre-screening process." },
  { title: "Informed Consent", desc: "Informed consent is an essential part of participating. It is the process of learning the key facts about a clinical study before deciding whether to participate. You will get a copy of the document to refer back to." },
  { title: "Screening Visit", desc: "Once you have consented, you may undergo other procedures and tests, such as filling out questionnaires or having blood work, to confirm that you qualify for the study." },
  { title: "Enrollment & Participation", desc: "The study team will review procedures with you and schedule tests. You follow the trial procedures and report any issues. Participation is voluntary and you can stop at any time." },
  { title: "End of Study", desc: "Your participation is complete. Researchers may provide information about results once the study data is analyzed." },
];

const About = () => (
  <>
    <PageHero title="About Us" subtitle="Learn about PRX Research — a leading clinical research facility in North Texas" backgroundImage={aboutHero} />

    {/* Who We Are */}
    <section className="py-20 bg-card overflow-hidden">
      <div className="container">
        <SectionHeader label="About Us" title="Who We Are" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              We leverage cutting-edge research technologies and practices to stay at the forefront of medicine.
              PRX is committed to accelerating the translation of biomedical discoveries into breakthrough healthcare solutions.
              Our team is here to collaborate on your breakthrough and leverage our expertise to turn research into reality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PRX embraces innovation and collaboration to address the most pressing healthcare challenges.
              Our multidisciplinary team of experts combines their knowledge in various medical fields, ensuring a comprehensive approach to problem-solving.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whoWeArePoints.map((point, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="p-5 bg-background rounded-xl border-l-4 border-l-primary border border-border hover:shadow-md transition-shadow cursor-default"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
              className="bg-card rounded-xl p-6 text-center border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              </motion.div>
              <p className="font-heading text-3xl font-bold text-primary">{stat.number}</p>
              <p className="font-heading font-semibold text-sm mt-1">{stat.label}</p>
              <p className="text-muted-foreground text-xs mt-2">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* What to Expect */}
    <section className="py-20 bg-card overflow-hidden">
      <div className="container">
        <SectionHeader label="Process" title="What Can I Expect?" description="Here's what happens before and after you enroll in a clinical study or clinical trial." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl sticky top-32"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={processImg}
              alt="Clinical trial process"
              className="w-full h-[450px] object-cover"
            />
          </motion.div>
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-default"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="shrink-0 w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-primary-foreground font-bold text-sm"
                  >
                    {i + 1}
                  </motion.div>
                  <div>
                    <h5 className="font-heading font-semibold text-primary mb-2">{step.title}</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
