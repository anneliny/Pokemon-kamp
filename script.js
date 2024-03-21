let trainer = {
    name: "Anneli",
    image: "trainer.png",
    myPokemon: [],
}
let eevee = {
    name: "Eevee",
    image: "eevee.png",
    level: "10",
};
let pichu = {
    name: "Pichu",
    image: "pichu.png",
    level: "15",
};
let cubone = {
    name: "Cubone",
    image: "cubone.png",
    level: "9",
};
let furret = {
    name: "Furret",
    image: "furret.png",
    level: "14",
};
let skitty = {
    name: "Skitty",
    image: "skitty.png",
    level: "5",
};


let possiblePokemon = [eevee, pichu, cubone, furret, skitty];
let randomPokemon;

let fightResult = ["You won!", "You lost!", "WINNER!", "LOOSER!"]
let randomResult;

let catchResult = ["You caught me, you bastard..", "Oh no, I thought I would get away..", "Crap, you got me.."]
let randomCatch;

let pokemonHtml = "";

updateView()

function updateView() {
    document.getElementById('app').innerHTML = /*html*/`
    <div class="updateViewContainer">
    <h1>Get ready to play!</h1>
    <img src="pokeball.png"/><br/>
    <button onclick="startGame()">Start game</button>
    </div>
    `;
}

function startGame() {
    getRandomPokemon();
    document.getElementById('app').innerHTML = /*html*/`
    <h1>What do you want to do?</h1>
<div class="startGameContainerImg">
    <img src="${trainer.image}">
    <div id="spacingDiv"></div>
    <img src="${randomPokemon.image}">
</div>
    
<div class="startGameContainerText">
    <div>${trainer.name}</div>
    <div>${randomPokemon.name}</div>
</div>
    
<div class="startGameContainerBtn">
    <button onclick="startGame()">Walk</button>
    <button onclick="fightOpponent()">Fight</button>
    <button onclick="catchPokemon()">Catch</button>
    <button onclick="showMyPokemon()">Show my pokemon</button>
</div>
    
    `;
}

function fightOpponent() {
    winOrLoose();
    document.getElementById('app').innerHTML = /*html*/`
    <h1>Did you win?</h1>
<div class="fightandCatchImg">
     <img src="${randomPokemon.image}">
</div>

<div class="fightandCatchText">
  <div>${randomPokemon.name}&nbsp; </div>
  <div> Lvl: ${randomPokemon.level}</div>
  <div id="spacingDiv"></div>
  <div>${randomResult}</div>
</div>
     
<div class="fightandCatchBtn">
    <button onclick="startGame()">Walk</button>
    <button onclick="catchPokemon()">Catch</button>
</div>
    `;
}

function catchPokemonView() {
    CatchOrNot();
    document.getElementById('app').innerHTML = /*html*/`
    <h1>Did you catch me?</h1>
<div class="fightandCatchImg">
     <img src="${randomPokemon.image}">
</div>

<div class="fightandCatchText">
  <div>${randomPokemon.name} &nbsp;</div>
  <div> Lvl: ${randomPokemon.level}</div>
  <div id="spacingDiv"></div>
  <div>${randomCatch}</div>
 </div>

<div class="fightandCatchBtn">
    <button onclick="startGame()">Walk</button>
    <button onclick="fightOpponent()">Fight</button>
</div>
    `;
}

function showMyPokemon() {
    showCaughtPokemon();
    app.innerHTML = /*html*/`
<h1>Your pokemon:</h1>
<div class="myPokemonContainer">
<div>${pokemonHtml}</div>
</div>

<div class="startGameClass">
<button onclick="startGame()">Find another</button>
</div>

`;
}

function showCaughtPokemon() {
    pokemonHtml = "";
    for (let i = 0; i < trainer.myPokemon.length; i++) {
        pokemonHtml +=  /*HTML*/`
    <div class="pokemonBox">
    <div>${trainer.myPokemon[i].name} Lvl: ${trainer.myPokemon[i].level}</div>
    <img class="myCollectionImg" src="${trainer.myPokemon[i].image}"/>
    </div>
    `;
    }
}

function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
}
function winOrLoose() {
    let randomEnd = Math.floor(Math.random() * fightResult.length);
    randomResult = fightResult[randomEnd];
}

function CatchOrNot() {
    let catchMe = Math.floor(Math.random() * catchResult.length);
    randomCatch = catchResult[catchMe];
}
function catchPokemon() {
    trainer.myPokemon.push(randomPokemon);
    catchPokemonView();
}