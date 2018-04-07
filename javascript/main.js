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

