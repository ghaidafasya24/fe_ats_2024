import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://ws-ats-714220031-f2558a9a9f9c.herokuapp.com/responden";
get(urlAPI, GetAllResponden);
function GetAllResponden(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = 
    isiTabel.replace("#USIA#", value.TugasWeek04_Kuisoner.usia)
            .replace("#JENISKELAMIN#", value.TugasWeek04_Kuisoner.jenis_kelamin)
            .replace("#PROGRAMSTUDI#", value.TugasWeek04_Kuisoner.program_studi)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}
// function isiRow(value) {
//     console.log("Value:", value); // Tampilkan nilai value di konsol
//     if (value && value.usia && value.jenis_kelamin && value.program_studi) {
//         let content = 
//             isiTabel.replace("#USIA#", value.usia)
//                     .replace("#JENISKELAMIN#", value.jenis_kelamin)
//                     .replace("#PROGRAMSTUDI#", value.program_studi)
//                     .replace("#WARNA#", getRandomColor())
//                     .replace(/#WARNALOGO#/g, getRandomColorName());
//         addInner("iniTabel", content);
//     } else {
//         console.error("Data mahasiswa tidak lengkap:", value);
//     }
// }





// import { get } from "https://bukulapak.github.io/api/process.js";
// import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
// import { isiTabel } from "./table.js";
// let urlAPI = "https://ws-ats-714220031-f2558a9a9f9c.herokuapp.com/responden";
// get(urlAPI, GetAllResponden);
// function GetAllResponden(results) {
//     results.forEach(isiRow);
// }
// function isiRow(value) {
//     console.log("Value:", value); //Tampilkan nilai value di konsol
//     if (value && value.jenis_kelamin && value.program_studi && value.pertanyaan && value.jawaban) {
//         let content = 
//         isiTabel.replace("#USIA#", value.usia)
//                 .replace("#JENISKELAMIN#", value.jenis_kelamin)
//                 .replace("#PROGRAMSTUDI#", value.program_studi)
//                 .replace("#WARNA#", getRandomColor())
//                 .replace(/#WARNALOGO#/g, getRandomColorName());
//         addInner("iniTabel", content);
    
//     } else {
//         console.error("Data Responden tidak lengkap:", value);
//     }
    
// }



