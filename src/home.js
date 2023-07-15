import bicycle1 from './assets/bicycle1.jpg';
import bicycle2 from './assets/bicycle2.jpg';
import bicycle3 from './assets/bicycle3.jpg';
import './css/home.css'
import { createElement } from './util';

const root = document.querySelector('#content');

const title = createElement('h1', "The World's Greatest Product");

let curr = 0;
//Add an array with an iterator
const imgArr = [bicycle1, bicycle2, bicycle3];
function imageContainer() {
    const element = document.createElement('div');

    const image = document.createElement('img');
    image.src = bicycle1;
    const backButton = createElement('div', "<")
    backButton.addEventListener('click', () => {
        if (curr === 0) {
            image.src = imgArr[2];
            curr = 2;
        } else {
            image.src = imgArr[curr - 1]
            curr--;
        }
        imgNum.textContent = curr + 1;
    })

    const frontButton = createElement('div', ">")
    frontButton.addEventListener('click', () => {
        if (curr === 2) {
            image.src = imgArr[0];
            curr = 0;
        } else {
            image.src = imgArr[curr + 1]
            curr++;
        }
        imgNum.textContent = curr + 1;
    })

    element.appendChild(backButton);
    element.appendChild(image);
    element.appendChild(frontButton);
    element.classList.add("image-container")
    return element;
}

const imgNum = createElement("h2", 1);
imgNum.classList.add("img-num");

const subHeading = createElement('h2', "Created with the Most Innovative Technology");

const description = createElement('p', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");



export default () => {
    root.appendChild(title);
    root.appendChild(imageContainer());
    root.appendChild(imgNum);
    root.appendChild(subHeading);
    root.appendChild(description);
}