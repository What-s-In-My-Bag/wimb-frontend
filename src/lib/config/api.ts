import axios from "axios";
import { BACKEND_URL } from "$env/static/private";

export const api = axios.create({
  baseURL: BACKEND_URL,
});
