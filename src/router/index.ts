/** @format */

import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import QuestionPage from "../pages/QuestionPage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "questions",
    path: "/questions",
    component: QuestionPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
