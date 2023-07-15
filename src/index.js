import util from './util';

function component(x, y){
    const element = document.createElement('div');
    element.innerHTML = util.add(x, y);
    return element;
}

document.body.appendChild(component(5, 4));