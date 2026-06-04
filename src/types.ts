export interface MünazaraAdımı {
  id: string;
  title: string;
  subtitle: string;
  category: "hazirlik" | "hitabet" | "mac" | "sorular";
  details: string[];
  tips: { title: string; text: string }[];
  completed: boolean;
}
