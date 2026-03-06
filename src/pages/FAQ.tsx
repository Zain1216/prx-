import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import faqHero from "@/assets/faq-hero.jpg";

const faqs = [
  { q: "Why should I participate in a clinical trial?", a: "By participating in a clinical trial you get access to the latest techniques and medicines. You may receive personal attention from top healthcare providers and the latest in cutting edge treatment, management, and therapies. By participating, you are helping to improve healthcare for everyone." },
  { q: "Is my participation confidential?", a: "Yes! All information, including medical, history of illness, personal, and any information obtained during the study, is confidential and protected by state and federal regulations governing clinical research. We will not release your personal information to anyone without your explicit authorization." },
  { q: "Will I be compensated for participating?", a: "Yes! In nearly all our trials, we will reimburse you a flat fee for your travel expense for each office visit. The reimbursement rate varies per study and will be discussed with you in detail during your visit before you sign the consent to participate." },
  { q: "What safeguards are in place to protect me?", a: "A written examination of the clinical research content, ethical responsibilities, benefits and risks will all be discussed prior to participation. The trials have preclinical data showing safety and effectiveness. Strict protocols outline what will take place during the trial, and informed consent ensures you have all necessary information." },
  { q: "Who decides if I am eligible?", a: "Researchers use inclusion criteria (characteristics everyone must have) and exclusion criteria (characteristics that would disqualify participation). For example, a diabetes study requires all participants to have diabetes." },
  { q: "How long do studies last?", a: "Each clinical trial has different timelines. Upon qualification into the study, the duration information would be given." },
  { q: "Who will be diagnosing me or giving medical advice?", a: "We have an excellent staff with a wealth of experience in clinical research. However, only our medical doctors will provide you with medical assessment and advice." },
  { q: "What can I expect from the clinical trial team?", a: "You can expect a comprehensive explanation of the clinical trial, all your questions answered, an informed consent form to read and sign, and an evaluation of your condition with a diagnosis by the study doctor." },
  { q: "Who decides what intervention I will get?", a: "Many trials test a drug against a placebo through randomization — participants are randomly assigned by computer. Some trials compare drugs or doses. Researchers cannot guarantee what you will receive, ensuring fairness." },
  { q: "What will it cost me to participate?", a: "Nothing! The trial might have reimbursement for your time, travel, and effort. All medical care, tests and medications related to the clinical trials are provided at no charge." },
  { q: "What happens if I want to leave?", a: "You can leave at any time for any reason. Participation is always voluntary. The informed consent document does not force you to remain. If you leave, let the researchers know why — this may help improve the process for others, but it is not required." },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary/20 transition-colors"
    >
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ x: 4 }}
        className="w-full flex items-center gap-3 p-5 text-left hover:bg-muted/50 transition-colors"
      >
        <motion.div animate={{ rotate: open ? 360 : 0 }} transition={{ duration: 0.3 }}>
          <HelpCircle className="w-5 h-5 text-primary shrink-0" />
        </motion.div>
        <span className="font-medium text-sm flex-1">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 ml-8">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {faq.a}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => (
  <>
    <PageHero title="FAQs" subtitle="Navigate through our Frequently Asked Questions to feel more informed about your health journey." backgroundImage={faqHero} />
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeader label="Help" title="Frequently Asked Questions" description="Discover answers, gain insights, and feel more informed about our services." />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FAQ;
