import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

export function GetAllResponden(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    // console.log(value)
    let content = 
    isiTabel.replace("#ID#", value._id)
            .replace("#USIA#", value.usia)
            .replace("#JENISKELAMIN#", value.jenis_kelamin)
            .replace("#PROGRAMSTUDI#", value.program_studi)
            .replace("#PROGRAMSTUDI#", value.program_studi)
            // .replace("#WARNA#", getRandomColor())
            // .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}