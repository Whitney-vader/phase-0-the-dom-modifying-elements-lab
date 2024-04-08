const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement('h1');
newHeader.textContent = "YOUR-NAME is the champion";  
newHeader.id = "victory";

document.body.append(newHeader);