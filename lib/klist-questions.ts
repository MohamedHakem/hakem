import { klistQuestions } from './data';
import { QuestionItemProps } from './types';

export async function getQuestions(): Promise<QuestionItemProps[]> {
  // In a real application, this would fetch from an API or database
  return klistQuestions;
}
