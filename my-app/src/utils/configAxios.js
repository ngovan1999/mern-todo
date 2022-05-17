import axios from "axios";

const request = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json" || "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

const handleError = (error) => {
  const { response = {} } = error;
  const { data, status, statusText } = response;
  return { data, status, statusText };
};

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use((response) => {
  return response;
}, handleError);

export default request;
