/** @format */

import axios from "axios";

const baseURL: string = "https://opentdb.com";
const api = axios.create({ baseURL });

export const getCategories = async () => {
  const { data } = await api.get(`/api_category.php`);
  return data;
};

export const getQuestionList = async (amount: number, category: string) => {
  const { data } = await api.get(
    `/api.php?amount=${amount}&category=${category}`
  );
  return data;
};
