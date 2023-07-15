import util from './util';
import './css/index.css';

function component(x, y){
    const element = document.createElement('div');
    element.innerHTML = util.add(x, y);
    return element;
}

document.body.appendChild(component(5, 4));