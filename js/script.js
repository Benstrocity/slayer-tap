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
const enemies = {
    enemy1: {
        name: 'Giant Worm',
        hitPoints: 100
    },
    enemy2: {
        name: 'Mutated Rat',
        hitPoints: 125
    },
    enemy3: {
        name: 'Rabbid Dog',
        hitPoints: 150
    }
};
let totalDamage = 0;
let totalHits = 0;
let hitPower = 10;
let enemyName;
let newHealth;
let enemyHealth;
let enemyHitPoints;
let level = 1;
let exp = 0;
let remExp = 100;
let sp = 0;

const createEnemy = () => {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        enemyName = enemies.enemy1.name;
        enemyHitPoints = enemies.enemy1.hitPoints;
        enemyHealth = enemyHitPoints + ' / ' + enemyHitPoints;
    } else if (randNum === 2) {
        enemyName = enemies.enemy2.name;
        enemyHitPoints = enemies.enemy2.hitPoints;
        enemyHealth = enemyHitPoints + ' / ' + enemyHitPoints;
    } else if (randNum === 3) {
        enemyName = enemies.enemy3.name;
        enemyHitPoints = enemies.enemy3.hitPoints;
        enemyHealth = enemyHitPoints + ' / ' + enemyHitPoints;
    }
}
    
const newGame = () => {
    createEnemy();
    
    totalDmgSpan.innerHTML = totalDamage;
    totalHitsSpan.innerHTML = totalHits;
    enemyNameH3.innerHTML = enemyName;
    enemyHealthP.innerHTML = enemyHealth;
    gameLvlSpan.innerHTML = level;
    plyrExpSpan.innerHTML = exp;
    remExpSpan.innerHTML = remExp;
    spSpan.innerHTML = sp;
}

enemyField.addEventListener('click', () => {
    newHealth = enemyHitPoints - hitPower;
    enemyHealthP.innerHTML = newHealth + ' / ' + enemyHitPoints;
});

newGame();

