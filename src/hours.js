import * as data from "./hours.json";
import "./hours.css";


function generate(container){
    // Generating header
    const h3 = document.createElement("h3");
    h3.innerText = "Hours";
    container.appendChild(h3);
    // Generating schedule
    const hours = data.hours;
    for(const day in hours){
        const opening = hours[day].open;
        const closing = hours[day].close;

        const div = document.createElement("div");
        div.innerText = day + ": " + opening + " - " + closing;
        container.appendChild(div);
    }
    // Applying styles
    container.classList.remove(...container.classList);
    container.classList.add("hours-container");

}
export {generate};