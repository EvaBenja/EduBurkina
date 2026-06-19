// Données fictives — ancrées dans le contexte burkinabè (noms, villes, régions, établissements)
// Aucune de ces personnes ou institutions n'est réelle.

export type Niveau = "Primaire" | "Collège" | "Lycée";

export interface Matiere {
  id: string;
  nom: string;
  icone: string; // clé d'icône (voir src/icons)
  couleur: string;
}

export const matieres: Matiere[] = [
  { id: "maths", nom: "Mathématiques", icone: "maths", couleur: "var(--terracotta)" },
  { id: "francais", nom: "Français", icone: "francais", couleur: "var(--indigo)" },
  { id: "sciences", nom: "Sciences (SVT)", icone: "sciences", couleur: "var(--green)" },
  { id: "physique", nom: "Physique-Chimie", icone: "physique", couleur: "var(--gold)" },
  { id: "histoire", nom: "Histoire-Géographie", icone: "histoire", couleur: "var(--terracotta)" },
  { id: "anglais", nom: "Anglais", icone: "anglais", couleur: "var(--indigo)" },
];

export interface Enseignant {
  id: string;
  nom: string;
  matiereId: string;
  ville: string;
  etablissement: string;
  avatarSeed: string;
}

export const enseignants: Enseignant[] = [
  { id: "e1", nom: "M. Issa Sawadogo", matiereId: "maths", ville: "Ouagadougou", etablissement: "Lycée Philippe Zinda Kaboré", avatarSeed: "issa" },
  { id: "e2", nom: "Mme Aïcha Ouédraogo", matiereId: "francais", ville: "Bobo-Dioulasso", etablissement: "Lycée Ouezzin Coulibaly", avatarSeed: "aicha" },
  { id: "e3", nom: "M. Boukari Kaboré", matiereId: "sciences", ville: "Koudougou", etablissement: "Lycée Mixte de Koudougou", avatarSeed: "boukari" },
  { id: "e4", nom: "Mme Rasmata Zongo", matiereId: "physique", ville: "Ouagadougou", etablissement: "Collège Saint Viateur", avatarSeed: "rasmata" },
  { id: "e5", nom: "M. Adama Traoré", matiereId: "histoire", ville: "Banfora", etablissement: "Lycée Provincial de la Comoé", avatarSeed: "adama" },
  { id: "e6", nom: "Mme Fatimata Compaoré", matiereId: "anglais", ville: "Ouahigouya", etablissement: "Lycée Yadéga", avatarSeed: "fatimata" },
];

export interface Cours {
  id: string;
  titre: string;
  matiereId: string;
  niveau: Niveau;
  classe: string; // ex: CM2, 6e, Terminale D
  enseignantId: string;
  leconsTotal: number;
  description: string;
}

export const cours: Cours[] = [
  { id: "c1", titre: "Les fractions et nombres décimaux", matiereId: "maths", niveau: "Primaire", classe: "CM2", enseignantId: "e1", leconsTotal: 12, description: "Comprendre et manipuler les fractions à travers des exemples du quotidien." },
  { id: "c2", titre: "Conjugaison : le présent et le passé composé", matiereId: "francais", niveau: "Primaire", classe: "CM1", enseignantId: "e2", leconsTotal: 10, description: "Maîtriser les bases de la conjugaison avec des textes adaptés." },
  { id: "c3", titre: "Le corps humain et ses organes", matiereId: "sciences", niveau: "Collège", classe: "6e", enseignantId: "e3", leconsTotal: 8, description: "Découvrir le fonctionnement du corps humain en s'amusant." },
  { id: "c4", titre: "Équations du second degré", matiereId: "maths", niveau: "Lycée", classe: "Seconde", enseignantId: "e1", leconsTotal: 14, description: "Résoudre des équations et interpréter les solutions." },
  { id: "c5", titre: "Lecture analytique : la poésie africaine", matiereId: "francais", niveau: "Lycée", classe: "Première D", enseignantId: "e2", leconsTotal: 9, description: "Étudier les grands poètes francophones d'Afrique de l'Ouest." },
  { id: "c6", titre: "Les états de la matière", matiereId: "physique", niveau: "Collège", classe: "5e", enseignantId: "e4", leconsTotal: 7, description: "Solide, liquide, gaz : comprendre les changements d'état." },
  { id: "c7", titre: "Histoire du Burkina Faso depuis 1960", matiereId: "histoire", niveau: "Lycée", classe: "Terminale D", enseignantId: "e5", leconsTotal: 11, description: "De l'indépendance à aujourd'hui, les grandes étapes." },
  { id: "c8", titre: "Les régions et fleuves d'Afrique de l'Ouest", matiereId: "histoire", niveau: "Collège", classe: "4e", enseignantId: "e5", leconsTotal: 6, description: "Géographie régionale et grands repères." },
  { id: "c9", titre: "English Basics : se présenter", matiereId: "anglais", niveau: "Collège", classe: "6e", enseignantId: "e6", leconsTotal: 8, description: "Vocabulaire et expressions pour les premières conversations." },
  { id: "c10", titre: "Mécanique : forces et mouvement", matiereId: "physique", niveau: "Lycée", classe: "Terminale D", enseignantId: "e4", leconsTotal: 13, description: "Notions fondamentales de mécanique newtonienne." },
  { id: "c11", titre: "Lecture et écriture créative", matiereId: "francais", niveau: "Primaire", classe: "CE2", enseignantId: "e2", leconsTotal: 9, description: "Stimuler l'imagination à travers de petites histoires." },
  { id: "c12", titre: "Numération et calcul mental", matiereId: "maths", niveau: "Primaire", classe: "CP", enseignantId: "e1", leconsTotal: 10, description: "Les bases du calcul pour bien démarrer." },
];

export interface Eleve {
  prenom: string;
  nom: string;
  classe: string;
  niveau: Niveau;
  ville: string;
  avatarSeed: string;
  serieJours: number;
  scoreMoyen: number;
}

export const eleves: Eleve[] = [
  { prenom: "Inoussa", nom: "Ouédraogo", classe: "6e A", niveau: "Collège", ville: "Ouagadougou", avatarSeed: "inoussa", serieJours: 6, scoreMoyen: 78 },
  { prenom: "Awa", nom: "Sankara", classe: "CM2", niveau: "Primaire", ville: "Bobo-Dioulasso", avatarSeed: "awa", serieJours: 12, scoreMoyen: 91 },
  { prenom: "Salam", nom: "Bamba", classe: "Terminale D", niveau: "Lycée", ville: "Ouagadougou", avatarSeed: "salam", serieJours: 3, scoreMoyen: 64 },
  { prenom: "Aminata", nom: "Konaté", classe: "5e B", niveau: "Collège", ville: "Koudougou", avatarSeed: "aminata", serieJours: 9, scoreMoyen: 85 },
];

export const eleveConnecte: Eleve = eleves[0];

export interface Devoir {
  id: string;
  titre: string;
  matiereId: string;
  dateLimite: string;
  statut: "à faire" | "rendu" | "en retard";
}

export const devoirsEleve: Devoir[] = [
  { id: "d1", titre: "Exercices sur les fractions (p.34)", matiereId: "maths", dateLimite: "20 juin", statut: "à faire" },
  { id: "d2", titre: "Rédaction : mon village pendant l'hivernage", matiereId: "francais", dateLimite: "22 juin", statut: "à faire" },
  { id: "d3", titre: "Quiz sur le système digestif", matiereId: "sciences", dateLimite: "18 juin", statut: "rendu" },
  { id: "d4", titre: "Carte des fleuves d'Afrique de l'Ouest", matiereId: "histoire", dateLimite: "15 juin", statut: "en retard" },
];

export interface Badge {
  id: string;
  nom: string;
  icone: string;
  obtenu: boolean;
  description: string;
}

export const badgesEleve: Badge[] = [
  { id: "b1", nom: "Série de 5 jours", icone: "flamme", obtenu: true, description: "5 jours d'apprentissage consécutifs" },
  { id: "b2", nom: "As des maths", icone: "etoile", obtenu: true, description: "Score parfait sur un quiz de maths" },
  { id: "b3", nom: "Lecteur assidu", icone: "livre", obtenu: true, description: "10 leçons de français terminées" },
  { id: "b4", nom: "Explorateur", icone: "boussole", obtenu: false, description: "Termine un cours dans chaque matière" },
];

export interface CoursEnCours {
  coursId: string;
  progression: number; // 0 à 100
}

export const coursEnCoursEleve: CoursEnCours[] = [
  { coursId: "c3", progression: 62 },
  { coursId: "c1", progression: 40 },
  { coursId: "c11", progression: 85 },
];

export interface Classe {
  id: string;
  nom: string;
  niveau: Niveau;
  effectif: number;
  scoreMoyen: number;
}

export const classesEnseignant: Classe[] = [
  { id: "cl1", nom: "6e A", niveau: "Collège", effectif: 42, scoreMoyen: 74 },
  { id: "cl2", nom: "6e B", niveau: "Collège", effectif: 39, scoreMoyen: 69 },
  { id: "cl3", nom: "Terminale D", niveau: "Lycée", effectif: 35, scoreMoyen: 81 },
];

export interface DevoirACorriger {
  id: string;
  titre: string;
  classe: string;
  rendus: number;
  total: number;
}

export const devoirsACorrigerEnseignant: DevoirACorriger[] = [
  { id: "dc1", titre: "Quiz : équations du second degré", classe: "Terminale D", rendus: 28, total: 35 },
  { id: "dc2", titre: "Exercices sur les fractions", classe: "6e A", rendus: 40, total: 42 },
  { id: "dc3", titre: "Rédaction libre", classe: "6e B", rendus: 22, total: 39 },
];

export const enseignantConnecte = enseignants[0];

export interface Temoignage {
  nom: string;
  role: string;
  ville: string;
  texte: string;
}

export const temoignages: Temoignage[] = [
  { nom: "Salamata Kaboré", role: "Mère de 3 enfants", ville: "Ouagadougou", texte: "Mes enfants se connectent même les jours sans école. Le suivi des devoirs m'a enlevé un vrai souci." },
  { nom: "M. Yacouba Traoré", role: "Enseignant de mathématiques", ville: "Bobo-Dioulasso", texte: "Je peux enfin voir qui a vraiment compris la leçon avant le contrôle. Ça change la préparation des cours." },
  { nom: "Awa Sankara", role: "Élève en CM2", ville: "Bobo-Dioulasso", texte: "J'aime bien les badges, ça donne envie de continuer la série tous les jours." },
];

export const stats = [
  { chiffre: "5", label: "niveaux scolaires" },
  { chiffre: "12+", label: "matières couvertes" },
  { chiffre: "30+", label: "enseignants partenaires" },
  { chiffre: "1 200+", label: "élèves actifs" },
];
