/** @format */

import { ActionPayload, createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { QuestionListTypes, StateTypes, GetQuestionTypes } from "../types";
import { getQuestionListApi } from "../api/index";

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
    controlQuestionNavigatorCurrent: 0,
    thingsOfNavbar: {
      isOpen: false,
    },
  },
  mutations: {
    [GETQUESTIONLIST](state, payload) {
      function frmatData(payload: any[]): QuestionListTypes[] {
        const data: QuestionListTypes[] = [];

        for (let key in payload) {
          const { correct_answer, question, incorrect_answers } = payload[key];

          data.push({
            correct_answer,
            question,
            id: Number(key),
            incorrect_answers: (incorrect_answers as string[]).map(
              (item, indx) => ({
                value: item,
                id: indx,
              })
            ),
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
