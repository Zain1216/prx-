import { Clock, Phone } from "lucide-react";

const TopBar = () => (
  <div className="bg-navy fixed top-0 w-full z-[1002] py-2">
    <div className="container flex items-center justify-center md:justify-between">
      <div className="hidden md:flex items-center text-xs text-primary-foreground/85 gap-1">
        <Clock className="w-3 h-3 text-teal" />
        Monday - Thursday 0900 - 0430 · Friday 0900-1200
      </div>
      <div className="flex items-center text-xs text-primary-foreground/85 gap-1">
        <Phone className="w-3 h-3 text-teal" />
        <a href="tel:9727774428" className="hover:text-primary-foreground transition-colors">
          Call us now 972-777-4428
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
