// console.log('Lola');

// PrintToDom
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
} 

const buildDomString = (data1, data2) => {
    let domString = '';
        domString += `<div> class="card">`;
        domString +=    `<div class='col-md-4 col-md-offset-1'>`;
        domString +=        `<img src="${data1.gravatar_url}">`;
        domString +=        `<h2 id="points">${data1.points.total}</h2>`;
        domString +=    `</div>`;
        domString +=    `<div class='col-md-4 col-md-offset-1'>`;
        domString +=        `<img src="${data2.gravatar_url}">`;
        domString +=        `<h2> id="points">${data2.points.total}</h2>`;
        domString +=    `</div>`
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

const startApplication = () => {
    const button = document.getElementById('button');
    button.addEventListener('click',() => {
        let
    })
}

startApplication();