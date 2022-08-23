/** @format */

import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { CategoryListTypes, StateTypes } from "../types";
import { getCategories } from "../api/index";

const key: InjectionKey<Store<StateTypes>> = Symbol();

const ActionKeys = {
  GETCATEGORYLIST: "GETCATEGORYLIST",
};
const {} = ActionKeys;

const store = createStore<StateTypes>({
  state: {},
  mutations: {
    GETCATEGORYLIST({}, payload) {},
  },
  actions: {},
  getters: {},
});

export { key };
export default store;
