


export interface TopicNode {
  id: string;
  name: string;
  children?: TopicNode[];
}

export type Difficulty = 'recognition' | 'comprehension' | 'application' | 'highApplication';

export const difficultyMap: Record<Difficulty, string> = {
  recognition: 'Nhận biết',
  comprehension: 'Thông hiểu',
  application: 'Vận dụng',
  highApplication: 'Vận dụng cao'
};

export interface QuestionVisual {
  type: 'graph' | 'table' | 'variation_table';
  data: any; // string for function, 2D array for table, structured object for variation table
}

export interface PropositionItem {
  text: string;
  topicAnalysis: string; // Analysis of the specific knowledge in this proposition
  difficulty: Difficulty;
}

export interface GeneratedQuestion {
  id: string; // client-side unique id
  topicId: string;
  topicName: string;
  type: 'multipleChoice' | 'trueFalse' | 'shortAnswer' | 'essay' | 'matching';
  difficulty: Difficulty;
  questionText: string;
  options?: string[];
  propositions?: PropositionItem[];
  matchingPrompts?: string[]; // For matching questions (Column A)
  matchingAnswers?: string[]; // For matching questions (Column B)
  answer: string;
  solution?: string;
  visual?: QuestionVisual;
  knowledgeDetail?: string; // Detailed knowledge description for precise similar question generation
}

export interface DifficultyLevelCounts {
  recognition: number;
  comprehension: number;
  application: number;
  highApplication: number;
}

export interface QuestionConfig {
  multipleChoice: DifficultyLevelCounts;
  trueFalse: DifficultyLevelCounts;
  shortAnswer: DifficultyLevelCounts;
  essay: DifficultyLevelCounts;
  matching: DifficultyLevelCounts;
}

export interface TestInfo {
  school: string;
  teacher: string;
  time: string;
  title: string;
  testCode: number;
  exportType: 'dethi' | 'loigiai';
}

export interface LicensedUser {
  id: string;
  school: string;
  teacher: string;
  deviceId: string;
}

export interface VariationTableColumn {
  xValue: string;
  yPrimeValue: string;
  yValue: string;
}

export interface FunctionAnalysisResult {
  domain: string;
  derivative: string;
  derivativeRoots: string[];
  extrema: {
    type: string;
    point: string;
  }[];
  limits: {
    point: string;
    value: string;
  }[];
  variationTable: {
    columns: VariationTableColumn[];
  };
}

export type NotificationType = 'error' | 'alert' | 'success' | 'info';

export interface Notification {
  id: number;
  type: NotificationType;
  message: string;
}
