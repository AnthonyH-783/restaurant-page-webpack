
import * as data from "./contacts.json";
import "./contacts.css";

function generate(container){
    // Generating header
    const h3 = document.createElement("h3");
    h3.innerText = "Contacts";
    container.appendChild(h3);
    // Generating contacts information
    const contacts = data.contact;
    for(const contact in contacts){
        const div = document.createElement("div");
        const value = contacts[contact];
        if(typeof value === "string"){
            div.innerText = contact + ": " + value;
        }
        else if(typeof value === "object" && contact === "address"){
            // Creating header for location info
            const h3b = document.createElement("h3");
            h3b.innerText = "Location";
            div.appendChild(h3b);
            // Rendering Address
            const address = data.contact[contact];
            console.log(address);
            for(const key in address){
                console.log(key);
                const span = document.createElement("span");
                span.innerText = address[key] + ", ";
                span.innerText = (key === "country") ?
                span.innerText.slice(0, span.innerText.length - 2) : span.innerText;
                div.appendChild(span);
            }


        }
        container.appendChild(div);

    }
    // Applying CSS
        container.classList.remove(...container.classList);
        container.classList.add("contacts-container");
    


}

export {generate};