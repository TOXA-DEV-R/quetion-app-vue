/** @format */

export interface SlectionTypes {
  label: string;
  id: number;
}

export interface CategoryListTypes {
  id: number;
  name: string;
}

export interface StateTypes {
  questionList: any[];
  questionListLength: number;
  isFinishedQuestions: boolean;
  questionNavigatorCurrent: number;
  thingsOfNavbar: {
    isOpen: Boolean;
  };
}

export interface GetQuestionTypes {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionListTypes {
  correct_answer: string;
  question: string;
  id: number;
  isQuestionItemClicked: boolean;
  incorrect_answers: IncorrectAnswer[];
}

export interface IncorrectAnswer {
  value: string;
  id: number;
  isClick: boolean;
}
