import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Maximize } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

interface ProjectDetailProps {
  projectId: string | null;
  onClose: () => void;
}

const ProjectDetail = ({ projectId, onClose }: ProjectDetailProps) => {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <AnimatePresence>
      {projectId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-background"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center border border-border bg-background/80 backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[70vh] overflow-hidden"
          >
            <img
              src={project.mainImage}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-body text-sm uppercase tracking-[0.2em] text-gold"
              >
                {project.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2 font-display text-5xl font-light text-foreground md:text-7xl"
              >
                {project.title}
              </motion.h1>
            </div>
          </motion.div>

          {/* Content */}
          <div className="container mx-auto px-6 py-16 md:px-16">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      Localisation
                    </p>
                    <p className="font-body text-foreground">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      Année
                    </p>
                    <p className="font-body text-foreground">{project.year}</p>
                  </div>
                </div>

                {project.surface && (
                  <div className="flex items-center gap-3">
                    <Maximize className="h-5 w-5 text-gold" />
                    <div>
                      <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                        Surface
                      </p>
                      <p className="font-body text-foreground">{project.surface}</p>
                    </div>
                  </div>
                )}

                <div className="border-t border-border pt-8">
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    Caractéristiques
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-body text-sm text-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="font-display text-2xl text-foreground mb-6">
                  À Propos du Projet
                </h2>
                <p className="font-body text-base leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>

                {/* Gallery */}
                <div className="mt-12">
                  <h3 className="font-body text-sm uppercase tracking-widest text-foreground mb-6">
                    Galerie
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="aspect-[4/3] overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-12"
                >
                  <Button variant="terracotta" size="lg" onClick={onClose}>
                    Retour aux projets
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
