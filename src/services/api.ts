import axios from "axios";
import { Recipe } from "../types/recipe";
import { Product } from "../types/product";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getRecipe = async (id: number): Promise<Recipe> => {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
}; 

// get products that are in an array of products or even an empty array
export const getProducts = async () :Promise <Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};