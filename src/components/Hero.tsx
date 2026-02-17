import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown, Trophy, CalendarDays, MapPin } from "lucide-react";
import bgLandscape from "../assets/background_landscape.jpg";
import bgPortrait from "../assets/background_potrait.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image - portrait for mobile, landscape for desktop */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 768px)" srcSet={bgLandscape} />
        <img
          src={bgPortrait}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6 md:mb-8"
        >
          Alva's College (Autonomous) • A Unit of Alva's Education Foundation •
          Affiliated to Mangalore University
        </motion.p>

        <motion.div
          variants={item}
          className="mb-4 md:mb-6 flex justify-center"
        >
          <img
            src="/logo.png"
            alt="Techotsav 2026 Logo"
            className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          <span className="text-foreground font-semibold">
            INTO THE TECHNO VERSE
          </span>
          <br />
          Inter-College IT Fest by Dept of Computer Science, Moodubidire
        </motion.p>

        {/* Highlight Bar */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 mb-10 md:mb-14"
        >
          {[
            { icon: Trophy, text: "Prize Pool: ₹15,000" },
            { icon: CalendarDays, text: "2nd – 3rd March 2026" },
            { icon: MapPin, text: "Shreemathi Mohini Appaji Nayak Vedike" },
          ].map((item, i) => (
            <div
              key={i}
              className={`glass px-5 py-3 flex items-center gap-3 text-sm ${
                i === 1
                  ? "sm:border-x-0 sm:rounded-none"
                  : i === 0
                    ? "sm:rounded-r-none"
                    : "sm:rounded-l-none"
              }`}
            >
              <item.icon size={16} className="text-primary shrink-0" />
              <span className="text-foreground/80">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <Link
            to="events"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <button className="group relative px-8 py-4 rounded-xl font-display text-sm font-semibold tracking-wider bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300">
              EXPLORE EVENTS
              <ChevronDown
                size={16}
                className="inline-block ml-2 group-hover:translate-y-1 transition-transform"
              />
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
