import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "+212617266691";
  const email = "achrafelhallaji@gmail.com";
  const whatsappMessage = encodeURIComponent("Bonjour Achraf, je souhaite discuter d'un projet d'architecture d'intérieur.");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation simple
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Pour l'instant, on simule l'envoi et on ouvre WhatsApp avec le message
    const whatsappFormMessage = encodeURIComponent(
      `Nouveau message de ${formData.name}\n\nEmail: ${formData.email}\nTéléphone: ${formData.phone || "Non fourni"}\n\nMessage:\n${formData.message}`
    );

    // Ouvrir WhatsApp avec le message du formulaire
    window.open(`https://wa.me/${phoneNumber.replace("+", "")}?text=${whatsappFormMessage}`, "_blank");

    // Ouvrir aussi l'email
    const mailtoLink = `mailto:${email}?subject=Nouveau message de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `De: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone || "Non fourni"}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    toast({
      title: "Message préparé",
      description: "WhatsApp et votre client email ont été ouverts avec votre message.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 6 17 26 66 91",
      href: `tel:${phoneNumber}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Discuter maintenant",
      href: `https://wa.me/${phoneNumber.replace("+", "")}?text=${whatsappMessage}`,
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Marrakech, Maroc",
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-card py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-[0.2em] text-gold">
            Contact
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl line-gold line-gold-center">
            Travaillons Ensemble
          </h2>
          <p className="mt-8 mx-auto max-w-2xl font-body text-base text-muted-foreground">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter 
            de vos idées et créer ensemble un espace qui vous ressemble.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-display text-2xl text-foreground">
              Restons en Contact
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 p-4 border border-border bg-background transition-all duration-300 hover:border-gold hover:shadow-elegant"
                    >
                      <div className="flex h-12 w-12 items-center justify-center bg-gradient-gold text-charcoal">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-body text-foreground group-hover:text-gold transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 border border-border bg-background">
                      <div className="flex h-12 w-12 items-center justify-center bg-gradient-gold text-charcoal">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-body text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    Nom *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="mt-2 border-border bg-background font-body focus:border-gold"
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="mt-2 border-border bg-background font-body focus:border-gold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  Téléphone
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+212 6 XX XX XX XX"
                  className="mt-2 border-border bg-background font-body focus:border-gold"
                />
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  rows={5}
                  className="mt-2 border-border bg-background font-body focus:border-gold resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="terracotta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
