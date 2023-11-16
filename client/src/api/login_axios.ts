import axios from "axios";
import { BASE_URL } from "./const";

export default axios.create({
  baseURL: BASE_URL,
});
