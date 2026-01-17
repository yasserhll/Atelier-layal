import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Janvier 2024 - Présent",
    title: "Architecte d'Intérieur",
    company: "Agence SIZER",
    location: "Marrakech",
    description:
      "Intervention sur des projets haut de gamme (restaurants, beach club, parc de jeux). Gestion complète de la conception à la réalisation. Production de plans, rendus 3D et dossiers techniques.",
  },
  {
    period: "2023",
    title: "Enseignant - 2ème année",
    company: "Formation Académique",
    location: "Marrakech",
    description:
      "Enseignement du dessin technique et formation sur AutoCAD, SketchUp, 3ds Max et V-Ray. Accompagnement des étudiants dans leurs projets pratiques.",
  },
  {
    period: "2022 - 2023",
    title: "Architecte d'Intérieur",
    company: "Atelier Moka (Mokhtar Kabbaj)",
    location: "Marrakech",
    description:
      "Participation à des projets variés (villas, restaurants, bureaux). Conception APS/APD/DCE et création de moodboards. Production de visuels 3D.",
  },
  {
    period: "2021 - 2022",
    title: "Architecte d'Intérieur Stagiaire",
    company: "Imaad Rahmouni",
    location: "Marrakech",
    description:
      "Projets haut de gamme (villas, restaurants, hôtels, SPA). Création de moodboards, recherches conceptuelles et sélection des matériaux.",
  },
  {
    period: "2020 - 2021",
    title: "Architecte d'Intérieur Stagiaire",
    company: "Art Concept & Carré",
    location: "Marrakech",
    description:
      "Travail sur cabinet de kinésithérapie et appartements. Relevés sur site, plans d'aménagement et rendus 3D.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="bg-background py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-[0.2em] text-gold">
            Parcours
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl line-gold line-gold-center">
            Expérience Professionnelle
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-16 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-16" : "md:ml-auto md:pl-16"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 hidden h-3 w-3 rounded-full bg-gold md:block ${
                  index % 2 === 0 ? "right-0 translate-x-1/2 -mr-[6.5px]" : "left-0 -translate-x-1/2 -ml-[6.5px]"
                }`}
              />

              <div className="group border border-border bg-card p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-elegant">
                <span className="font-body text-xs uppercase tracking-widest text-gold">
                  {exp.period}
                </span>
                <h3 className="mt-3 font-display text-2xl text-foreground">
                  {exp.title}
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {exp.company} — {exp.location}
                </p>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
