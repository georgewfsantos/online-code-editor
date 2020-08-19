import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/open-veezoo/editor",
});

export default api;
