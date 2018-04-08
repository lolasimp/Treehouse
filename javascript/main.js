// console.log('Lola');

// PrintToDom
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
} 

const buildDomString = (data1, data2) => {
    let domString = '';
        domString += `<div class="card">`;
        domString +=    `<div class='col-md-4 col-md-offset-1'>`;
        domString +=        `<img src="${data1.gravatar_url}">`;
        domString +=        `<h2id="points">${data1.points.total}</h2>`;
        domString +=    `</div>`;
        domString +=    `<div class='col-md-4 col-md-offset-1'>`;
        domString +=        `<img src="${data2.gravatar_url}">`;
        domString +=        `<h2id="points">${data2.points.total}</h2>`;
        domString +=    `</div>`
        domString += `<div>`;
        printToDom(domString, "bothPlayers-container");
};

const winner = (pdata1, pdata2) => {
    let domString = '';
    if(pdata1.points.total > pdata2.points.total) {
        domString += `<div>${pdata1.name} Wins!</div>`;
    } else {
        domString += `<div>${pdata2.name} Winnner!!</div>`;
    }
    printToDom(domString, "winner-container");
};

const returnSecondPlayer = (data1, player2) => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', JSONConvert);
    myRequest.addEventListener('error', allFailed);
    myRequest.open('GET',`https://teamtreehouse.com/${player2}.json`);
    myRequest.send();

    function JSONConvert () {
        const data2 = JSON.parse(this.responseText);
        winner(data1, data2);
        buildDomString(data1, data2);
        }
};


function singlePoints () {
    let player2Name = document.getElementById('player2').value;
    const data = JSON.parse(this.responseText);
    returnSecondPlayer(data, player2Name);
}



function allFailed () {
    prompt("Name does Not Exist!");
}


const genericXHRRequest = (urlName, callBack) => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', callBack);
    myRequest.addEventListener('error', allFailed);
    myRequest.open('GET',`https://teamtreehouse.com/${urlName}.json`);
    myRequest.send();
};

const startApplication = () => {
    const button = document.getElementById('button');
    button.addEventListener('click',() => {
        let player1Name = document.getElementById('player1').value;
        genericXHRRequest(player1Name, singlePoints);
    });
};


startApplication();