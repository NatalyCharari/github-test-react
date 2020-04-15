import axios from "axios";

let api = axios.create({
  baseURL: "https://api.github.com/",
});

const logError = (error) => {
  console.log("API Request error: ", error);
  return error;
};

export const getGists = () => {
  return api.get(`/gists`).catch(logError);
};
