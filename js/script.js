//Declare global variables
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
            updateLevel();
        }
        damageDealt();
        totalClicks();
        earnSP();
    });
}

//Enemy death behavior
const killEnemy = () => {
    createEnemy();
    earnSP(25);
}

//Earn slayerpoints when monsters are killed
const earnSP = increase => {
    sp += increase;
    return increase;
}

//Tally up total damage dealt
const damageDealt = () => {
    totalDmgSpan.innerHTML = totalDamage;
    totalDamage += hitPower;
}

//Tally up total amount of clicks/taps on enemy
const totalClicks = () => {
    totalHitsSpan.innerHTML = totalHits;
    totalHits += 1;
    spSpan.innerHTML = earnSP(2);
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
        earnSP();
    } else if (exp > 99 && exp < 250) {
        level = 2;
        hitPower += 5;
        remExp = 500 - exp;
        earnSP();
    } else if (exp > 249 && exp < 500) {
        level = 3;
        hitPower += 5;
        remExp = 1000 - exp;
        earnSP();
    } else if (exp > 499 && exp < 850) {
        level = 4;
        hitPower += 5;
        remExp = 1750 - exp;
        earnSP();
    } else if (exp > 849 && exp < 1200) {
        level = 5;
        hitPower += 5;
        remExp = 2500 - exp;
        earnSP();
    } else if (exp > 1199 && exp < 1600) {
        level = 6;
        hitPower += 5;
        remExp = 4000 - exp;
        earnSP();
    } else if (exp > 1799 && exp < 2200) {
        level = 7;
        hitPower; //Max power from leveling
        remExp = 6500 - exp;
        earnSP();
    } else if (exp > 2199 && exp < 3000) {
        level = 8;
        hitPower; //Max power from leveling
        remExp = 10000 - exp;
        earnSP();
    } else if (exp > 2999 && exp < 5000) {
        level = 9;
        hitPower; //Max power from leveling
        remExp = 20000 - exp;
        earnSP();
    } else if (exp > 4999 && exp < 10000) {
        level = 10;
        hitPower; //Max power from leveling
        remExp = 35000 - exp;
        earnSP();
    } else {
        maxLevel();
    }
}

//Define the maximum level possible and win message
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
    createEnemy();
    attack();
    updateLevel();
    damageDealt();
    totalClicks();
    earnSP();
    upgrade();
    reset();
}

newGame();






