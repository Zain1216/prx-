import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import contactHero from "@/assets/contact-hero.jpg";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const contactInfo = [
  { icon: MapPin, title: "Address", value: "1011 N. Galloway Avenue\nMesquite, TX, 75149", href: "https://maps.app.goo.gl/VbtLJ394u9FZm7S98" },
  { icon: Mail, title: "Email", value: "admin@prxresearch.com", href: "mailto:admin@prxresearch.com" },
  { icon: Phone, title: "Call", value: "972-777-4428", href: "tel:9727774428" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:admin@prxresearch.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with our clinical research team in Mesquite, TX" backgroundImage={contactHero} />

      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeader label="Contact Us" title="Get In Touch" description="If you have any questions or need further information about our services, don't hesitate to contact us." />

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.title === "Address" ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-background rounded-xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-xl transition-all block"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"
                >
                  <info.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="font-heading font-semibold mb-2">{info.title}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-2xl p-8 border border-border space-y-4 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "hsl(var(--primary))" }}
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                placeholder="Message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-teal text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity w-full md:w-auto inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-2xl overflow-hidden min-h-[400px] shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.520414742655!2d-96.60302222591133!3d32.77845778391519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea5a26213fadd%3A0x29323264f04d05d2!2s1011+N+Galloway+Ave%2C+Mesquite%2C+TX+75149%2C+USA!5e0!3m2!1sen!2s!4v1700766161493!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRX Research Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
