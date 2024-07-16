import axios from "axios";
// baseURL: "https://video-player-mu-murex.vercel.app/",

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});
