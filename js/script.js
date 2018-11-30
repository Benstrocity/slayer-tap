const enemyField = document.querySelector('#enemyField');
const upgrades = document.querySelector('#upgMenu');
const restart = document.querySelector('#restartGame');
const totalDmgSpan = document.querySelector('#totalDmg');
const totalHitsSpan = document.querySelector('#totalHits');
const enemyNameH3 = document.querySelector('#enemyName');
const enemyHealthP = document.querySelector('#enemyHealth');
const gameLvlSpan = document.querySelector('#gameLvl');
const plyrExpSpan = document.querySelector('#plyrExp');
const remExpSpan = document.querySelector('#remExp');
const spSpan = document.querySelector('#sp');
const enemies = 
      [
          ['Mutated Rat', 'Rabbid Dog', 'Giant Worm'],
          [250, 500, 750]
      ];
let enemyName;
let enemyHealth;
let enemyHitPoints;
let totalDamage = 0;
let hitPower = 10;
let totalHits = 0;
let level = 1;
let exp = 0;
let remExp = 100;
let sp = 0;

//Load default stat and menu values
const loadDefaults = () => {
    gameLvlSpan.innerHTML = level;
    plyrExpSpan.innerHTML = exp;
    remExpSpan.innerHTML = remExp;
}

//Creates a random enemy
const createEnemy = () => {
    let randNum = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < randNum; i++) {
        enemyName = enemies[0][i];
        enemyHitPoints = enemies[1][i];
    }
    enemyNameH3.innerHTML = enemyName;
    enemyHealthP.innerHTML = enemyHitPoints;
}

//Attack behavior
const attack = () => {
    enemyField.addEventListener('click', () => {
        enemyHitPoints = enemyHitPoints - hitPower;
        enemyHealthP.innerHTML = enemyHitPoints;
        if (enemyHitPoints <= 0) {
            killEnemy();
        }
    });
}

//Enemy death behavior
const killEnemy = () => {
    createEnemy();
    updateLevel();
}

//Update experience and level
const updateLevel = () => {
    plyrExpSpan.innerHTML = exp;
    gameLvlSpan.innerHTML = level;
    remExpSpan.innerHTML = remExp;
    exp += 50;
    if (exp > 0 && exp < 100) {
        level = 1;
        remExp = 100 - exp;
    } else if (exp > 99 && exp < 500) {
        level = 2;
        hitPower += 25;
        remExp = 500 - exp;
    } else if (exp > 499 && exp < 1000) {
        level = 3;
        hitPower += 25;
        remExp = 1000 - exp;
    } else if (exp > 999 && exp < 1750) {
        level = 4;
        hitPower += 25;
        remExp = 1750 - exp;
    } else if (exp > 1749 && exp < 2500) {
        level = 5;
        hitPower += 25;
        remExp = 2500 - exp;
    } else if (exp > 2499 && exp < 4000) {
        level = 6;
        hitPower += 25;
        remExp = 4000 - exp;
    } else if (exp > 3999 && exp < 6500) {
        level = 7;
        hitPower += 25;
        remExp = 6500 - exp;
    } else if (exp > 6499 && exp < 10000) {
        level = 8;
        hitPower; //Max
        remExp = 10000 - exp;
    } else if (exp > 9999 && exp < 20000) {
        level = 9;
        hitPower; //Max
        remExp = 20000 - exp;
    } else if (exp > 19999 && exp < 35000) {
        level = 10;
        hitPower; //Max
        remExp = 35000 - exp;
    } else {
        maxLevel();
    }
}

const maxLevel = () => {
    if (exp === 4000) {
        enemyField.innerHTML = 
            `<h2>Congratulations, you have reached the max level!</h2>`;
        enemyField.addEventListener('click', () => {
            alert(`Click 'Restart Game' to play again.`)
        });
    }
}

//Upgrades menu
const upgrade = () => {
    upgrades.addEventListener('click', () => {
        alert('Feature coming soon.');
    });
}

//Restart the game
const reset = () => {
    restart.addEventListener('click', () => {
        location.reload();
    });
}

//Launch a new game
const newGame = () => {
    loadDefaults();
    createEnemy();
    attack();
    updateLevel();
    upgrade();
    reset();
}

newGame();






