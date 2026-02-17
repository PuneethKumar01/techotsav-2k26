import { motion } from "framer-motion";
import { Mail, ClipboardList, MapPin, Instagram } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/constants";

const FOOTER_LINKS = [
  {
    label: "Register Here",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf9zqtCMsWgwKLnxp-Q4S0y9v55yKYFoT8VX46BrwparwMeFw/viewform",
    icon: ClipboardList,
    color: "hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]",
  },
  {
    label: "Get Directions",
    href: "https://maps.app.goo.gl/ZVkaXEe9wuL6TVXN7",
    icon: MapPin,
    color: "hover:shadow-[0_0_20px_hsl(270_76%_53%/0.4)]",
  },
  {
    label: "Follow on Instagram",
    href: "https://www.instagram.com/it.techotsav/",
    icon: Instagram,
    color: "hover:shadow-[0_0_20px_hsl(330_80%_55%/0.4)]",
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative py-20 md:py-28 border-t border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-wider text-foreground mb-4">
            GET <span className="text-gradient">CONNECTED</span>
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <Mail size={16} />
            {CONTACT_EMAIL}
          </a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
        >
          {FOOTER_LINKS.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 ${color}`}
            >
              <Icon
                size={22}
                className="text-primary group-hover:text-foreground transition-colors"
              />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
              </span>
            </a>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground/50">
            © 2026 TECHOTSAV — Dept of Computer Science, Alva's College,
            Moodubidire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
