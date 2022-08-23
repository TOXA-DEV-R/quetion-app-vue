/** @format */

import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import QuestionPage from "../pages/QuestionPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/questions",
    component: QuestionPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
