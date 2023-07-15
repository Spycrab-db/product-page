import './css/index.css';
import home from './home';
import about from './about';

const root = document.querySelector('#content');

home()

//Navigation controls
const homeDiv = document.querySelector('#home-nav');
const contactDiv = document.querySelector('#contact-nav');
const aboutDiv = document.querySelector('#about-nav');

homeDiv.addEventListener('click', ()=>{
    while (root.hasChildNodes()) {
        root.removeChild(root.firstChild);
    }
    home();
})
aboutDiv.addEventListener('click', ()=>{
    while (root.hasChildNodes()) {
        root.removeChild(root.firstChild);
    }
    about();
});