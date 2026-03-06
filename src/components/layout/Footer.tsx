import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">PRX Research</h3>
          <div className="space-y-3 text-primary-foreground/80 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-teal shrink-0" />
              1011 N. Galloway Avenue<br />Mesquite, TX, 75149
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal shrink-0" />
              <a href="tel:9727774428" className="hover:text-teal transition-colors">972-777-4428</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal shrink-0" />
              <a href="mailto:admin@prxresearch.com" className="hover:text-teal transition-colors">admin@prxresearch.com</a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-teal transition-colors"
                >
                  <ChevronRight className="w-3 h-3" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule Visit */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Schedule Your Visit</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">
            Click below to make an appointment at PRX Research. Our team will assist you promptly.
          </p>
          <a
            href="mailto:admin@prxresearch.com"
            className="gradient-orange inline-block text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Make an Appointment
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} PRX Research. All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
