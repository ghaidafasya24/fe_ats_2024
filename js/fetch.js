import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-ats-714220031-f2558a9a9f9c.herokuapp.com/responden";
get(urlAPI,GetAllResponden);
function GetAllResponden(results){
    console.log(results);
}