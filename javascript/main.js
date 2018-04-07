console.log('Lola');

// PrintToDom
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
} 

const buildDomString = (data) => {
    let domString = '';
        domString += `<div> class="card">`;
        domString +=    `<img src="${data.gravatar_url}">`;
        domString +=    `<p id="points">${data.points.total}</p>`;
        domString += `<div>`;
        printToDom(domString, "bothPlayers-container");
};

function successFunction () {
    const data = JSON.parse(this.responseText);
    buildDomString(data);
};


const genericXHRRequest = () => {
    const myRequest = new HMLHttpRequest();
    myRequest.addEventListener('load',);
    myRequest.addEventListener('error',);
    myRequest.open('GET',);
    myRequest.send();
};
