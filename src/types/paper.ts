
export interface PaperConfig {
  topic: string;
  keywords: string[];
  audience: string;
  tone: string;
  pageLength: {
    min: number;
    max: number;
  };
  citationStyle: string;
  outputFormat: string;
}

export interface PaperSection {
  title: string;
  content: string;
}

export interface Citation {
  id: string;
  authors: string[];
  year: number;
  title: string;
  source: string;
  url?: string;
  doi?: string;
}

export interface GeneratedPaper {
  title: string;
  abstract: string;
  introduction: string;
  sections: PaperSection[];
  conclusion: string;
  references: Citation[];
}
