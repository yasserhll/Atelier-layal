import projectVilla from "@/assets/project-villa.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectBeach from "@/assets/project-beach.jpg";
import projectSpa from "@/assets/project-spa.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  longDescription: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  surface?: string;
}

export const projects: Project[] = [
  {
    id: "villa-palmeraie",
    title: "Villa Palmeraie",
    category: "Résidentiel",
    location: "Marrakech, Maroc",
    year: "2024",
    description: "Une villa luxueuse mêlant architecture contemporaine et tradition marocaine.",
    longDescription: "Cette villa exceptionnelle de 800m² située au cœur de la Palmeraie de Marrakech représente une fusion parfaite entre le luxe contemporain et l'artisanat marocain traditionnel. Les espaces de vie ouverts baignent dans une lumière naturelle abondante, tandis que les matériaux nobles - marbre, bois de cèdre et tadelakt - créent une atmosphère de sérénité absolue.",
    mainImage: projectVilla,
    gallery: [projectVilla, projectSpa, projectBeach],
    features: ["Salon double hauteur", "Piscine à débordement", "Hammam privatif", "Jardin méditerranéen"],
    surface: "800 m²",
  },
  {
    id: "restaurant-dar-zellij",
    title: "Restaurant Dar Zellij",
    category: "Restauration",
    location: "Marrakech, Maroc",
    year: "2024",
    description: "Un restaurant gastronomique alliant élégance moderne et touches orientales.",
    longDescription: "Le restaurant Dar Zellij est un espace gastronomique de 350m² conçu pour offrir une expérience culinaire immersive. L'utilisation audacieuse de l'éclairage indirect, combinée aux textures riches du velours et du laiton, crée une ambiance intimiste et sophistiquée. Chaque détail a été pensé pour sublimer l'art culinaire marocain.",
    mainImage: projectRestaurant,
    gallery: [projectRestaurant, projectVilla, projectSpa],
    features: ["Bar en onyx", "Cuisine ouverte", "Terrasse panoramique", "Éclairage scénographique"],
    surface: "350 m²",
  },
  {
    id: "beach-club-essaouira",
    title: "Beach Club Essaouira",
    category: "Hospitalité",
    location: "Essaouira, Maroc",
    year: "2023",
    description: "Un beach club méditerranéen avec vue imprenable sur l'océan Atlantique.",
    longDescription: "Ce beach club exclusif de 1200m² capture l'essence de la côte atlantique marocaine. L'architecture organique s'intègre harmonieusement au paysage naturel, utilisant des matériaux locaux comme la pierre de taza et le bois flotté. Les espaces lounges intérieurs-extérieurs offrent une transition fluide entre confort raffiné et beauté brute de l'océan.",
    mainImage: projectBeach,
    gallery: [projectBeach, projectRestaurant, projectVilla],
    features: ["Lounge vue mer", "Bar rooftop", "Cabanes privées", "Piscine infinity"],
    surface: "1200 m²",
  },
  {
    id: "spa-oasis",
    title: "Spa L'Oasis",
    category: "Bien-être",
    location: "Marrakech, Maroc",
    year: "2023",
    description: "Un sanctuaire de bien-être inspiré des traditions ancestrales du hammam.",
    longDescription: "Le Spa L'Oasis réinterprète l'expérience traditionnelle du hammam marocain dans un cadre résolument contemporain. Sur 500m², les espaces de soins s'articulent autour d'un bassin central illuminé par un puits de lumière zénithal. Les textures naturelles de la pierre et du bois créent une atmosphère apaisante propice à la relaxation profonde.",
    mainImage: projectSpa,
    gallery: [projectSpa, projectBeach, projectVilla],
    features: ["Hammam traditionnel", "Salle de massage", "Bassin de flottaison", "Jardin zen"],
    surface: "500 m²",
  },
];
