import * as Menu from "./menu"; // Menu Module
import * as About from "./about";// About Module
import * as Hours from "./hours"; //Hours Module
import * as Contacts from "./contacts"; // Contacts module
import "./styles.css";



/**
 * Controller that retrives DOM elements and defines handlers and listeners
 * that act upon them
 */
(function ScreenController(){
    // Selecting DOM Elements
    const container = document.getElementById("container");
    const header = document.getElementById("header");
    const nav = document.querySelector("nav");
    const nav_tabs = nav.children;
    const logo = document.getElementById("logo");
    console.log(nav_tabs);
    const DEFAULT_SELECTION = "menu";
    const DEFAULT_CATEGORY = "sushi";
    let current = DEFAULT_SELECTION;

    // Initializing content section to menu
    Menu.generate_menu(container, DEFAULT_CATEGORY);

        const scrollToMyRef = (id) => {
        var ref = document.getElementById(id);
        setTimeout(function () {
            ref.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }, 100);
    };

    // Creating listeners for click events
    (function clickHandler(){
        const arr = Array.from(nav_tabs);
        arr.forEach((tab) => {
            tab.addEventListener("click", scrollToMyRef("header"));
        });
        logo.addEventListener("click", logoClickHandler);
        nav.addEventListener("click", menuClickHandler);
        nav.addEventListener("click", aboutUsClickHandler);
        nav.addEventListener("click", hoursClickHandler);
        nav.addEventListener("click", contactsClickHandler);
        container.addEventListener("click", toggleMenuCategory);


    })();

    // Helper functions
    function extractEventData(event){
        const el = event.target;
        const node_name = el.nodeName;
        const text = el.innerText.toLowerCase();
        return {el, node_name, text};
    }

    // Handler Functions

    /**
     * Handler for toggling between menu categories
     */
    function toggleMenuCategory(event){
        if(!event.target.classList.contains("tab")) return;
        const category = event.target.innerText.toLowerCase();
        Menu.clearMenu(container);
        Menu.generate_menu(container, category);  
    }
    /**
     * Handler for logo clicking
     */
    function logoClickHandler(){

        header.scrollIntoView({behavior: "smooth", block: "start"});
        
    }
    /**
     * Handler for clicking on the "Menu" section
     */
    function menuClickHandler(event){
        // Extracting element data
        const el = event.target;
        const node_name = el.nodeName;
        const text = el.innerText.toLowerCase();
        if(!el || node_name !== "A" || text !== "menu") return;
        container.innerHTML = ""; // Resetting container
        Menu.generate_menu(container, DEFAULT_CATEGORY);
    }

    /**
     * Handler for clicking on the "About Us" section
     */
    function aboutUsClickHandler(event){
        // Extracting and validating data
        const node = extractEventData(event);
        if(!node.el || node.node_name !== "A" || node.text !== "about us") return;

        // Changing Container
        container.innerHTML = "";
        About.generate(container);
    }

    /**
     * Handler for clicking on the "Hours" section
     */
    function hoursClickHandler(event){
        // Extracting and validating data
        const node = extractEventData(event);
        if(!node.el || node.node_name !== "A" || node.text !== "hours") return;

        // Rendering Container
        container.innerHTML = "";
        Hours.generate(container);
    }

    /**
     * Handler for clicking on the "Contact Us" section
     */
    function contactsClickHandler(event){
        // Extracting and validating data
        const node = extractEventData(event);
        if(!node.el || node.node_name !== "A" || node.text !== "contact us") return;

        // Rendering container
        container.innerHTML = "";
        Contacts.generate(container);

    }
})();