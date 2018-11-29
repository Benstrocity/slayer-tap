const enemyField = document.querySelector('#enemyField');
const upgrades = document.querySelector('#upgMenu');
const restart = document.querySelector('#restartGame');
let totalDmgSpan = document.querySelector('#totalDmg');
let totalHitsSpan = document.querySelector('#totalHits');
let enemyNameH3 = document.querySelector('#enemyName');
let enemyHealthP = document.querySelector('#enemyHealth');
let gameLvlSpan = document.querySelector('#gameLvl');
let plyrExpSpan = document.querySelector('#plyrExp');
let remExpSpan = document.querySelector('#remExp');
let spSpan = document.querySelector('#sp');
let totalDamage = 0;
let totalHits = 0;
let hitPower = 10;
let enemyName;
let enemyHealth;
let enemyHitPoints;
let level = 1;
let exp = 0;
let remExp = 100;
let sp = 0;
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

function createEnemy() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        enemyName = enemies.enemy1.name;
        enemyHitPoints = enemies.enemy1.hitPoints;
    } else if (randNum === 2) {
        enemyName = enemies.enemy2.name;
        enemyHitPoints = enemies.enemy2.hitPoints;
    } else if (randNum === 3) {
        enemyName = enemies.enemy3.name;
        enemyHitPoints = enemies.enemy3.hitPoints;
    }
}

function attackEnemy() {
    enemyHealth = enemyHitPoints + ' / ' + enemyHitPoints;
    enemyField.addEventListener('click', () => {
        enemyHealth = enemyHitPoints - hitPower;
        enemyHealthP.innerHTML = enemyHealth + ' / ' + enemyHitPoints;
    });
}
    
function newGame() {
    createEnemy();
    attackEnemy();
    
    totalDmgSpan.innerHTML = totalDamage;
    totalHitsSpan.innerHTML = totalHits;
    enemyNameH3.innerHTML = enemyName;
    enemyHealthP.innerHTML = enemyHealth;
    gameLvlSpan.innerHTML = level;
    plyrExpSpan.innerHTML = exp;
    spSpan.innerHTML = sp;
}

newGame();

