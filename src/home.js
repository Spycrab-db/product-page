import bicycle1 from './assets/bicycle1.jpg';
import './css/home.css'

const title = document.createElement('h1');
title.textContent = "The World's Greatest Product";

function imageContainer() {
    const element = document.createElement('div');

    const image = document.createElement('img');
    image.src = bicycle1;

    const backButton = document.createElement('div')
    backButton.innerText = "<";

    const frontButton = document.createElement('div')
    frontButton.innerText = ">";
    element.appendChild(backButton);
    element.appendChild(image);
    element.appendChild(frontButton);
    element.classList.add("image-container")
    return element;
}

const subHeading = document.createElement('h2');
subHeading.textContent = "Created with the Most Innovative Technology"

const description = document.createElement('p');
description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const root = document.querySelector('#content');

export default () => {
    const root = document.querySelector("#content");
    root.appendChild(title);
    root.appendChild(imageContainer());
    root.appendChild(subHeading);
    root.appendChild(description);
}