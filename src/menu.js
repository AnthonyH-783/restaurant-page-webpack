/**
 * Loading JSON file and styles
 */
import "./menu-styles.css"; // This makes styles added by JS recognizable, similar to <style> in html
import data from  "./menu.json"; // data is a plain javascript object


/**
 * @param {HTMLElement} container 
 */
function generate_menu(container, category){
    // Applying flex property to container
    container.classList.add("container");
    const header = createHeader();
    const menu_tabs = createMenuTabs();
    const listing = createMenuListing(category);
    container.appendChild(header);
    container.appendChild(menu_tabs);
    container.appendChild(listing);


}

function createHeader(){
    // Create DOM Element
    const header = document.createElement("h2");
    header.innerText = "Menu";
    // Applying styles
    header.classList.add("libre-baskerville-600");
    header.classList.add("header");
    return header;
}

function createMenuTabs(){
    const categories = Object.keys(data.menu);
    const tab_container = document.createElement("div");
    tab_container.classList.add("menu")
    for(const category of categories){
        // Creating/styling buttons and adding them to nav container
        const button = document.createElement("button");
        button.innerText = category;
        button.classList.add("tab");
        tab_container.appendChild(button);
    }
    return tab_container;
}

function createMenuListing(category){
    // Create section
    const section = document.createElement("div");
    section.classList.add("menu-section");
    // Creating section title
    const title = document.createElement("h3");
    title.innerText = category[0].toUpperCase() + category.slice(1);
    title.classList.add("menu-section-title");

    // Extracting stored data
    const items_container = document.createElement("div");
    const menu_items = data.menu[category];
    for(const item_object of menu_items){ // Looping through arrays related to a category
        const title = item_object["title"];
        const description = item_object["description"];
        const price = item_object["price_cents"] / 100;
        const menu_item_dom = createMenuItem(title, description, price);

        items_container.appendChild(menu_item_dom);
    }
    items_container.classList.add("menu-body");


    // Appending
    section.appendChild(title);
    section.appendChild(items_container);

    return section;

}

function createMenuItem(title, description, price){
    // Creating Elements
    const container = document.createElement("div");
    const header = document.createElement("div");
    const header_name = document.createElement("h4");
    const p = document.createElement("p");
    const span = document.createElement("span");

    // Adding Text to Elements
    header_name.innerText = title;
    p.innerText = description;
    span.innerText = price + " " + data.currency;

    // Styling Elements
    container.classList.add("menu-item");
    header.classList.add("item-header");
    header_name.classList.add("item-header-name");
    p.classList.add("description");
    span.classList.add("price");

    // Appending
    header.appendChild(header_name);
    header.appendChild(span);
    container.appendChild(header);
    container.appendChild(p);
    
    return container;   
}

function clearMenu(container){

    while(container.children.length > 0) container.removeChild(container.firstChild);

}

export {generate_menu, clearMenu};