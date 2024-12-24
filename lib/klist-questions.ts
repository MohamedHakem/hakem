import { klistQuestions } from './data';
import { QuestionItemProps } from './types';

export function getQuestions(): QuestionItemProps[] {
  // fetch from an API or db
  return klistQuestions;
}
