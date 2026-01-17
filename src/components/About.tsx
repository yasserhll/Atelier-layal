import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/profil1.jpeg";
import portrait2 from "@/assets/profil2.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "AutoCAD",
    "SketchUp",
    "3ds Max",
    "V-Ray",
    "D5 Render",
    "Photoshop",
    "InDesign",
  ];

  return (
    <section id="about" className="bg-background py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={portrait}
                alt="Achraf Hallaji"
                className="w-full max-w-md mx-auto object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 border border-gold/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-gold/30 -z-10 hidden md:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-sm uppercase tracking-[0.2em] text-gold">
              À Propos
            </span>
            <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl line-gold">
              Achraf Hallaji
            </h2>
            
            <div className="mt-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <p className="font-body text-base leading-relaxed text-muted-foreground">
                  Professionnel rigoureux et passionné par l'architecture d'intérieur depuis mon enfance. 
                  Titulaire d'un Master en Architecture d'Intérieur de l'Université Privée de Marrakech, 
                  j'apporte dynamisme et détermination à chaque projet.
                </p>
                
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                  Mon approche créative allie esthétique contemporaine et respect des traditions, 
                  créant des espaces uniques qui reflètent la personnalité et les aspirations de chaque client.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full md:w-48 flex-shrink-0"
              >
                <img
                  src={portrait2}
                  alt="Achraf Hallaji au travail"
                  className="w-full h-auto object-cover transition-all duration-700 border border-gold/20"
                />
              </motion.div>
            </div>

            <div className="mt-8">
              <h3 className="font-body text-sm uppercase tracking-widest text-foreground">
                Compétences
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="border border-border bg-card px-4 py-2 font-body text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <span className="font-display text-3xl text-gold">5+</span>
                <p className="mt-1 font-body text-xs uppercase tracking-wider text-muted-foreground">
                  Ans d'expérience
                </p>
              </div>
              <div>
                <span className="font-display text-3xl text-gold">50+</span>
                <p className="mt-1 font-body text-xs uppercase tracking-wider text-muted-foreground">
                  Projets réalisés
                </p>
              </div>
              <div>
                <span className="font-display text-3xl text-gold">100%</span>
                <p className="mt-1 font-body text-xs uppercase tracking-wider text-muted-foreground">
                  Satisfaction client
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
