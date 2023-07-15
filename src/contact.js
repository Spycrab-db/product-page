import { createElement } from './util';
import './css/contact.css';

const root = document.querySelector("#content");

const title = createElement("h1", "Contact");
const email = createElement("h3", "Email: awesomeproduct@gmail.com");
const number = createElement("h3", "Number: (000) 000-0000");
const address = createElement("h3", "Address: Some street, some city");

export default () =>{
    root.appendChild(title);
    root.appendChild(email);
    root.appendChild(number);
    root.appendChild(address);
}