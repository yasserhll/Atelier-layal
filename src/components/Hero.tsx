import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      
      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-amber-400">
            Architecte d'Intérieur
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl font-light tracking-wide text-white md:text-7xl lg:text-8xl"
        >
          Achraf Hallaji
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 1 }}
          className="my-8 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl font-body text-base font-light leading-relaxed text-white/80 md:text-lg"
        >
          Créer des espaces où l'élégance rencontre la fonctionnalité, 
          où chaque détail raconte une histoire de luxe et de raffinement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="hero" size="xl" onClick={scrollToProjects} className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
            Découvrir mes projets
          </Button>
          <Button variant="elegant" size="xl" onClick={scrollToContact} className="text-white border-white/30 hover:border-amber-400 hover:text-amber-400">
            Me contacter
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToProjects}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
        >
          <span className="font-body text-xs uppercase tracking-widest">Défiler</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
