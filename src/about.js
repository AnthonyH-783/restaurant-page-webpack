import "./about.css";
import desc from "./about.json";
import img from "./images/about.jpg";
import path from "path";
console.log(img);
const img_url = "./images/about.jpg";

function generate(container){

    // Generating image on left hand side
    const img = document.createElement("img");
    img.src = img_url;
    container.appendChild(img);

    // Generating text description on right
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    const title = desc.about_us.title;
    const para = desc.about_us.text;

    h3.innerText = title;
    p.innerText = para;

    // Constructing DOM Tree
    div.appendChild(h3);
    div.appendChild(p);
    container.appendChild(div);

    // Applying CSS
    container.classList.add("container");
    div.classList.add("desc-div");

}

export {generate};