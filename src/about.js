import team from './assets/team.jpg';
import './css/about.css';
import { createElement } from './util';

const title = document.createElement('h1');
title.textContent = "Our Story"

const img = document.createElement('img');
img.src = team;

const subHeading = document.createElement('h2');
subHeading.textContent = "Our Business Philosophy"

const description = document.createElement('p');
description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default () =>{
    const root = document.querySelector('#content');
    root.appendChild(title);
    root.appendChild(img);
    root.appendChild(subHeading);
    root.appendChild(description);
}