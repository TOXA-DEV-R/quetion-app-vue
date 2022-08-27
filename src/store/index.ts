/** @format */

import { ActionPayload, createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import {
  QuestionListTypes,
  StateTypes,
  GetQuestionTypes,
  IncorrectAnswer,
} from "../types";
import { getQuestionListApi } from "../api/index";
import { randomArray } from "../custom/hooks";

const key: InjectionKey<Store<StateTypes>> = Symbol();

const ActionKeys = {
  GETQUESTIONLIST: "GETQUESTIONLIST",
};
const { GETQUESTIONLIST } = ActionKeys;

const store = createStore<StateTypes>({
  state: {
    questionList: [],
    questionListLength: 0,
    isFinishedQuestions: false,
    questionNavigatorCurrent: 0,
    thingsOfNavbar: {
      isOpen: false,
    },
  },
  mutations: {
    [GETQUESTIONLIST](state, payload) {
      function frmatData(payload: any[]): QuestionListTypes[] {
        const data: QuestionListTypes[] = [];

        for (let payloadKey in payload) {
          const { correct_answer, question, incorrect_answers } =
            payload[payloadKey];

          function formatIncorrectaAnswers(data: any[]): any[] {
            let formatData: any[] = data.map((item, indx) => ({
              value: item,
              id: indx,
              isClicked: false,
              isTrue: false,
              whichOneTrueItemClick: false,
              lastClicked: false,
            }));

            formatData.push({
              value: correct_answer,
              id: formatData.length,
              isClicked: false,
              isTrue: true,
              whichOneTrueItemClick: false,
              lastClicked: false,
            });

            return randomArray(formatData);
          }

          data.push({
            correct_answer,
            question,
            id: Number(payloadKey),
            isQuestionClicked: false,
            incorrect_answers: formatIncorrectaAnswers(incorrect_answers),
            isCheckedQuestion: false,
            isAnswerFined: false,
          });
        }
        return data;
      }
      state.questionList = frmatData(payload);
      console.log(state.questionList);
      state.questionListLength = payload?.length;
    },
    openThingsOfNavbar(state) {
      state.thingsOfNavbar.isOpen = true;
    },
    closeThingsOfNavbar(state) {
      state.thingsOfNavbar.isOpen = false;
    },
    changeQuestionNavigatorCurrent(state, payload) {
      state.questionNavigatorCurrent = payload;
    },
    questionListItemHandle(state, { id, questionNavigatorCurrent }): void {
      state.questionList = state.questionList.map(
        (question: QuestionListTypes) => {
          if (questionNavigatorCurrent === question.id) {
            return {
              ...question,
              isQuestionClicked: true,
              incorrect_answers: question?.incorrect_answers.map(
                (item: IncorrectAnswer) => {
                  if (item.id === id) {
                    return { ...item, isClicked: true };
                  } else {
                    return { ...item, isClicked: false };
                  }
                }
              ),
            };
          } else {
            return question;
          }
        }
      );
    },
    whichOneTrueItem(state, payload) {
      state.questionList = state.questionList.map((question) => {
        if (payload === question.id) {
          return {
            ...question,
            isQuestionClicked: true,
            incorrect_answers: question.incorrect_answers.map((item) => {
              if (item.isTrue) {
                return {
                  ...item,
                  whichOneTrueItemClick: true,
                };
              } else if (item.isClicked) {
                return {
                  ...item,
                  lastClicked: true,
                };
              } else {
                return item;
              }
            }),
          };
        } else {
          return question;
        }
      });

      state.questionList = state.questionList.map((question) => {
        const isTureAnswer = question?.incorrect_answers.some(
          (item) => item.isTrue === item.whichOneTrueItemClick
        );

        const warning = question?.incorrect_answers.some(
          (item) =>
            item.isClicked && item.lastClicked && !item.whichOneTrueItemClick
        );

        if (payload === question.id) {
          return {
            ...question,
            isAnswerFined: isTureAnswer,
            isCheckedQuestion: warning,
          };
        } else {
          return question;
        }
      });
      console.log(state.questionList);
    },
  },
  actions: {
    async getQuestionList(
      { commit },
      { amount, category }: { amount: number; category: number }
    ) {
      const response = await getQuestionListApi(amount, category);
      const results: GetQuestionTypes[] = response?.results;
      commit(GETQUESTIONLIST, results);
    },
  },
  getters: {},
});

export { key };
export default store;
