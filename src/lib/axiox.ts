import axios from "axios";

export const api = axios.create({
  baseURL: "https://video-player-mu-murex.vercel.app/",
  // baseURL: "http://localhost:3000",
});
