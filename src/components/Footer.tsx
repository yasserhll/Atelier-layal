import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/achrafhallaji/", label: "Instagram" },
    { icon: PhoneCall, href: "https://wa.me/212611726691", label: "Whatsapp" },
    { icon: Mail, href: "mailto:achrafelhallaji@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl font-light text-cream"
          >
            Achraf<span className="text-gold">.</span>Hallaji
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-md font-body text-sm text-cream/60"
          >
            Architecte d'intérieur passionné, créant des espaces uniques 
            où le luxe rencontre la fonctionnalité.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/60 transition-all duration-300 hover:border-gold hover:text-gold"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="my-8 h-px w-full max-w-xs bg-cream/10" />

          {/* Copyright */}
          <p className="font-body text-xs uppercase tracking-wider text-cream/40">
            © {currentYear} Achraf Hallaji. Tous droits réservés.
          </p>
          
          {/* Developer credit */}
          <p className="mt-3 font-body text-xs text-cream/40">
            Développé par{" "}
            <a
              href="https://hallajiyassir.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-colors hover:text-cream"
            >
              Yassir.h
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
