export interface MünazaraAdımı {
  id: string;
  title: string;
  subtitle: string;
  category: "hazirlik" | "hitabet" | "mac" | "sorular";
  details: string[];
  tips: { title: string; text: string }[];
  completed: boolean;
}

export interface TaslakArgüman {
  title: string;
  explanation: string;
  example: string;
  bodyLanguageTip: string;
}

export interface TaslakÇürütme {
  possibleCounterArgument: string;
  rebuttalStrategy: string;
}

export interface MünazaraTaslağı {
  title: string;
  introduction: string;
  definitions: string;
  arguments: TaslakArgüman[];
  rebuttals: TaslakÇürütme[];
  conclusion: string;
  pointers: string[];
}

export interface KayıtlıTaslak {
  id: string;
  createdAt: string;
  topic: string;
  side: "tez" | "antitez";
  keywords: string;
  draft: MünazaraTaslağı;
}
