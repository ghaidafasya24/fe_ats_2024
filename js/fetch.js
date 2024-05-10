import { get } from "https://bukulapak.github.io/api/process.js";
import {GetAllResponden } from "./controller/get.js";
import { urlAPI } from "./config/url.js";
// import { urlAPI2 } from "./config/url.js";
get(urlAPI,GetAllResponden);
// get(urlAPI2,GetAllPertanyaan);



