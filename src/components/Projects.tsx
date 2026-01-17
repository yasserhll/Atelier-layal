import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-card py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-[0.2em] text-gold">
            Portfolio
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl line-gold line-gold-center">
            Projets Sélectionnés
          </h2>
          <p className="mt-8 mx-auto max-w-2xl font-body text-base text-muted-foreground">
            Une sélection de projets illustrant mon approche créative et mon attention aux détails 
            dans la conception d'espaces haut de gamme.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-body text-xs uppercase tracking-widest text-gold">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-3xl text-cream">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-cream/80 transition-colors hover:text-gold">
                    <span className="font-body text-sm uppercase tracking-wider">Voir le projet</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Info below image */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
