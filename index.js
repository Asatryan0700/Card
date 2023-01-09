import BCard from "./components/index.js";

if (!customElements.get("aaa-bcard")) {
    customElements.define("aaa-bcard", BCard);
}

const form = document.forms[0];
const bc = document.querySelector("aaa-bcard");

const formHandler = e => {
    let el = e.target;
    bc.setAttribute(el.name, el.value);
}

for (let i = 0; i < form.elements.length; i++) {
    const el = form.elements[i];
    el.value = bc.getAttribute(el.name);
    switch (el.localName) {
        case "input": 
          el.addEventListener("input", formHandler); 
        break;
        case "select": 
          el.addEventListener("change", formHandler); 
        break;
    }
}
