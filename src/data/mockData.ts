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

// --- Ardoise intelligente ---------------------------------------------

export interface ExerciceArdoise {
  id: string;
  matiereId: string;
  niveau: Niveau;
  enonce: string;
  solution: string;
  astuce: string;
}

export const exercicesArdoise: ExerciceArdoise[] = [
  { id: "ex1", matiereId: "maths", niveau: "Primaire", enonce: "Pose et calcule : 47 + 28", solution: "75", astuce: "Aligne bien les unités sous les unités, les dizaines sous les dizaines." },
  { id: "ex2", matiereId: "maths", niveau: "Collège", enonce: "Résous : 3x + 5 = 20", solution: "x = 5", astuce: "Isole x en soustrayant 5 des deux côtés, puis divise par 3." },
  { id: "ex3", matiereId: "francais", niveau: "Primaire", enonce: "Écris le pluriel de « cheval » et « bijou »", solution: "chevaux, bijoux", astuce: "Pense aux pluriels en -aux et -oux : ce sont des exceptions à retenir." },
  { id: "ex4", matiereId: "francais", niveau: "Collège", enonce: "Conjugue « finir » à la 3e personne du pluriel, au présent", solution: "ils/elles finissent", astuce: "Les verbes du 2e groupe prennent -issent au pluriel." },
  { id: "ex5", matiereId: "sciences", niveau: "Collège", enonce: "Cite les trois états de la matière", solution: "Solide, liquide, gazeux", astuce: "Pense à l'eau : glace, eau liquide, vapeur." },
  { id: "ex6", matiereId: "physique", niveau: "Lycée", enonce: "Calcule la vitesse d'un mobile parcourant 150 km en 2 heures", solution: "75 km/h", astuce: "Vitesse = distance ÷ temps." },
  { id: "ex7", matiereId: "histoire", niveau: "Lycée", enonce: "En quelle année le Burkina Faso a-t-il pris ce nom ?", solution: "1984", astuce: "C'est sous la révolution, quelques années après l'indépendance de 1960." },
  { id: "ex8", matiereId: "anglais", niveau: "Collège", enonce: "Traduis : « Je vais à l'école tous les jours »", solution: "I go to school every day", astuce: "Présent simple pour une habitude : sujet + verbe (+ s à la 3e personne)." },
];

// --- Chat (messagerie élève) -------------------------------------------

export interface MessageChat {
  id: string;
  auteur: "eleve" | "contact";
  texte: string;
  heure: string;
}

export interface ConversationChat {
  id: string;
  nom: string;
  role: string;
  avatarSeed: string;
  enLigne: boolean;
  messages: MessageChat[];
}

export const conversationsEleve: ConversationChat[] = [
  {
    id: "conv1",
    nom: "Assistant EduBurkina",
    role: "Aide aux devoirs",
    avatarSeed: "assistant-eduburkina",
    enLigne: true,
    messages: [
      { id: "m1", auteur: "contact", texte: "Bonjour Inoussa ! Une question sur un cours ou un devoir ?", heure: "08:02" },
      { id: "m2", auteur: "eleve", texte: "Oui, je bloque sur les fractions p.34", heure: "08:05" },
      { id: "m3", auteur: "contact", texte: "Regarde l'exercice 3 : commence par mettre les deux fractions au même dénominateur.", heure: "08:06" },
      { id: "m4", auteur: "eleve", texte: "Ah d'accord, merci !", heure: "08:07" },
    ],
  },
  {
    id: "conv2",
    nom: "M. Issa Sawadogo",
    role: "Professeur de mathématiques",
    avatarSeed: "issa",
    enLigne: true,
    messages: [
      { id: "m1", auteur: "contact", texte: "Bonsoir, n'oublie pas l'exercice sur les fractions pour vendredi.", heure: "Hier, 18:40" },
      { id: "m2", auteur: "eleve", texte: "D'accord monsieur, je le fais ce soir", heure: "Hier, 19:02" },
      { id: "m3", auteur: "contact", texte: "Très bien. Tu peux me demander si un point n'est pas clair.", heure: "Hier, 19:05" },
    ],
  },
  {
    id: "conv3",
    nom: "Mme Aïcha Ouédraogo",
    role: "Professeure de français",
    avatarSeed: "aicha",
    enLigne: false,
    messages: [
      { id: "m1", auteur: "contact", texte: "Ta rédaction sur le village est bien partie, continue ainsi.", heure: "Lundi, 14:10" },
      { id: "m2", auteur: "eleve", texte: "Merci madame ! Je la termine cette semaine.", heure: "Lundi, 14:32" },
    ],
  },
  {
    id: "conv4",
    nom: "Awa Sankara",
    role: "Camarade de classe",
    avatarSeed: "awa",
    enLigne: false,
    messages: [
      { id: "m1", auteur: "contact", texte: "Tu as compris l'exercice de sciences sur le corps humain ?", heure: "Mardi, 17:20" },
      { id: "m2", auteur: "eleve", texte: "Un peu, on en parle demain en classe ?", heure: "Mardi, 17:25" },
      { id: "m3", auteur: "contact", texte: "Oui pas de souci 👍", heure: "Mardi, 17:26" },
    ],
  },
];

const REPONSES_AUTO: Record<string, string[]> = {
  conv1: [
    "Bonne question. Relis d'abord la leçon, puis essaie l'exercice — dis-moi où ça bloque.",
    "Tu peux aussi t'entraîner sur l'ardoise intelligente avant de continuer.",
    "Tu es sur la bonne voie, continue comme ça !",
  ],
  conv2: [
    "Bien reçu, on regarde ça ensemble au prochain cours si besoin.",
    "Pense à vérifier ton résultat avec l'astuce donnée en classe.",
  ],
  conv3: [
    "D'accord, prends ton temps et soigne les transitions entre paragraphes.",
    "Très bien, hâte de lire la suite.",
  ],
  conv4: [
    "Ok, on s'organise ça demain alors !",
    "Pas de souci, à demain 🙂",
  ],
};

export function reponseAutomatique(conversationId: string, indexEnvoi: number): string {
  const options = REPONSES_AUTO[conversationId] ?? ["D'accord, merci pour ton message."];
  return options[indexEnvoi % options.length];
}

