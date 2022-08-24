/** @format */

import axios from "axios";

const baseURL: string = "https://opentdb.com";
const api = axios.create({ baseURL });

export const getCategoriesApi = async () => {
  const { data } = await api.get(`/api_category.php`);
  return data;
};

export const getQuestionListApi = async (amount: number, category: number) => {
  const { data } = await api.get(
    `/api.php?amount=${amount}&category=${category}`
  );
  return data;
};
