import axios from "axios";
export const getApiClient = () => {
  return axios.create({});
};
