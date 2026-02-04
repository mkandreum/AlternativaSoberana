export interface ProgramSection {
  id: string;
  category: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  stats?: string;
  items: ProgramItem[];
}

export interface ProgramItem {
  title: string;
  content: string;
  highlight?: boolean;
}

export enum AppTab {
  BUSINESS = 'BUSINESS',
  FOOD = 'FOOD',
  CITIZEN = 'CITIZEN'
}