export const createElement = (element, content) => {
    const newElement = document.createElement(element);
    newElement.textContent = content;
    return newElement;
}