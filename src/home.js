import bicycle1 from './assets/bicycle1.jpg';
import './css/home.css'
import { createElement } from './util';

const root = document.querySelector('#content');

const title = createElement('h1', "The World's Greatest Product");

function imageContainer() {
    const element = document.createElement('div');

    const image = document.createElement('img');
    image.src = bicycle1;

    const backButton = createElement('div', "<")

    const frontButton = createElement('div', ">")
    
    element.appendChild(backButton);
    element.appendChild(image);
    element.appendChild(frontButton);
    element.classList.add("image-container")
    return element;
}

const subHeading = createElement('h2', "Created with the Most Innovative Technology");

const description = createElement('p', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");



export default () => {
    root.appendChild(title);
    root.appendChild(imageContainer());
    root.appendChild(subHeading);
    root.appendChild(description);
}