export interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  category: string;
  skills: string[];
  deadline: string;
  clientRating: number;
  clientFeedback?: string;
}