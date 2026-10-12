export interface Chapter {
  id: string;
  number: number | string;
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  objectives: string[];
  scenario: string;
  sections: ChapterSection[];
  apaTemplate?: {
    tableTitle: string;
    tableHeaders: string[];
    tableRows: (string | number)[][];
    note: string;
  };
  actionDiscussionExample: {
    academic: string;
    actionOriented: {
      remediation: string;
      consolidation: string;
      enrichment: string;
    };
  };
}

export interface ChapterSection {
  id: string;
  title: string;
  concept: string;
  steps: string[];
  jamoviOutputDescription: string;
  warningAlert?: string;
  tipAlert?: string;
  formula?: string;
  exampleInterpretation?: string;
}

export interface ApaTableItem {
  id: string;
  title: string;
  chapterNumber: number;
  statType: string;
  htmlContent: string;
  explanation: string;
  writingTemplate: string;
}

export interface AcademicReference {
  id: string;
  citationAPA: string;
  titleTh: string;
  type: 'Book' | 'Journal' | 'Manual' | 'Standard';
  description: string;
  url?: string;
  doi?: string;
  tags: string[];
}
