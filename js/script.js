//Declare global variables
const enemyField = document.querySelector('#enemyField');
const upgList = document.querySelector('#upgItems');
const restart = document.querySelector('#restartGame');
const totalDmgSpan = document.querySelector('#totalDmg');
const totalHitsSpan = document.querySelector('#totalHits');
const enemyNameH3 = document.querySelector('#enemyName');
const enemyHealthP = document.querySelector('#enemyHealth');
const gameLvlSpan = document.querySelector('#gameLvl');
const plyrExpSpan = document.querySelector('#plyrExp');
const remExpSpan = document.querySelector('#remExp');
const spSpan = document.querySelector('#sp');
const dmgBtn = document.querySelector('#dmgBtn');
const spBtn = document.querySelector('#spBtn');
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
}

//Attack behavior
const attack = () => {
    enemyField.addEventListener('click', () => {
        enemyHitPoints = enemyHitPoints - hitPower;
        updateCounters();
        if (enemyHitPoints <= 0) {
            killEnemy();
            updateLevel();
            earnSP(25); //Earn slayerpoints
        }
        damageDealt();
        totalClicks();
    });
}

//Enemy death behavior
const killEnemy = () => {
    createEnemy();
}


//Tally up total damage dealt
const damageDealt = () => {
    totalDamage += hitPower;
    updateCounters();
}

//Tally up total amount of clicks/taps on enemy
const totalClicks = () => {
    totalHits += 1;
    earnSP(2); //Earn slayerpoints
    updateCounters();
}

//Add SP
const earnSP = addSP => sp += addSP;

//Update experience and level
const updateLevel = () => {
    exp += 50;
    if (exp > 0 && exp < 100) {
        level = 1;
        remExp = 100 - exp;
        earnSP(0);
    } else if (exp > 99 && exp < 250) {
        level = 2;
        hitPower += 1;
        remExp = 500 - exp;
        earnSP(50); 
    } else if (exp > 249 && exp < 500) {
        level = 3;
        hitPower += 1;
        remExp = 1000 - exp;
        earnSP(50);
    } else if (exp > 499 && exp < 850) {
        level = 4;
        hitPower += 1;
        remExp = 1750 - exp;
        earnSP(50);
    } else if (exp > 849 && exp < 1200) {
        level = 5;
        hitPower += 1;
        remExp = 2500 - exp;
        earnSP(50);
    } else if (exp > 1199 && exp < 1600) {
        level = 6;
        hitPower += 1;
        remExp = 4000 - exp;
        earnSP(50);
    } else if (exp > 1799 && exp < 2200) {
        level = 7;
        hitPower; //Max power from leveling
        remExp = 6500 - exp;
        earnSP(50);
    } else if (exp > 2199 && exp < 3000) {
        level = 8;
        hitPower += 1;
        remExp = 10000 - exp;
        earnSP(50);
    } else if (exp > 2999 && exp < 5000) {
        level = 9;
        hitPower += 1;
        remExp = 20000 - exp;
        earnSP(50);
    } else if (exp > 4999 && exp < 10000) {
        level = 10;
        hitPower += 1;
        remExp = 35000 - exp;
        earnSP(50);
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

//Behavior of buttons when clicked
const btnAccept = selectBtn => {
    selectBtn.addEventListener('mousedown', () => {
        selectBtn.style.color = '#0f0';
    });
    selectBtn.addEventListener('mouseup', () => {
        selectBtn.style.color = '#000'; 
    });
}

const btnDeny = selectBtn => {
    selectBtn.addEventListener('mousedown', () => {
        selectBtn.style.color = '#f00';
    });
    selectBtn.addEventListener('mouseup', () => {
        selectBtn.style.color = '#000'; 
    });
}

//Purchasing upgrades
const buyUpgrades = () => {
    //Prevents btnAccept/btnDeny delay on first click
    btnAccept(dmgBtn);
    btnAccept(spBtn);
    btnDeny(dmgBtn);
    btnDeny(spBtn);
    spBtn.addEventListener('click', () => {
        if (sp >= 500) {
            sp -= 500;
            hitPower += 10; 
            updateCounters();
            btnAccept(spBtn);
        } else {
            btnDeny(spBtn);
        }
    });
    
    dmgBtn.addEventListener('click', () => {
        if (sp >= 500) {
            sp -= 500;
            updateCounters();
            btnAccept(dmgBtn)
        } else {
            btnDeny(dmgBtn);
        }
    });
}

//Function to update counters when other actions occur
const updateCounters = () => {
    totalDmgSpan.innerHTML = totalDamage;
    totalHitsSpan.innerHTML = totalHits;
    spSpan.innerHTML = sp;
    enemyHealthP.innerHTML = enemyHitPoints;
    enemyNameH3.innerHTML = enemyName;
    enemyHealthP.innerHTML = enemyHitPoints;
    plyrExpSpan.innerHTML = exp;
    gameLvlSpan.innerHTML = level;
    remExpSpan.innerHTML = remExp;
}

//Restart the game
const reset = () => {
    restart.addEventListener('click', () => {
        location.reload();
    });
}

//Launch a new game
const newGame = () => {
    createEnemy(); //Spawn the first enemy
    attack(); //Enable attack functionality
    buyUpgrades(); //Enable the shop to be used
    reset(); //Allow new games to be started
    updateCounters(); //Set counters to load defaults
}

newGame(); //Start a new game on load






