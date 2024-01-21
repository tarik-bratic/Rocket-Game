/* Global variables */
let destn_value = 250;
let velocity_value = -25;
let pressure = 0;

// Variables to store data
let startY = 0;
let endY = 0;
let contact = false;
const ship = document.querySelector("#rs");

/* The game is ongoing */
setInterval(updateGameMobile, 1000);

function updateGameMobile() {

  /* When first contact happens */
  ship.addEventListener("touchstart", (event) => {

    contact = true;
    let touch = event.touches[0];

    /* Prevent bounce effect */
    if (touch.clientY != startY) {
      startY = touch.clientY;
      endY = startY - 400;              // Set an interval
      console.log(touch.clientY);
    }
    
  })

  /* Increase or decrease pressure */
  ship.addEventListener("touchmove", (event) => {
    
    contact = true;
    let touch = event.touches[0];

    /* Prevent bounce effect */
    if (touch.clientY != startY) {
      startY = touch.clientY;
      pressure = (endY / startY) * 100; // pressure -> 0 - 100 (0.0 - 1.0)
    }

    pressureInbound(pressure);

  });

  /* When contact breaks */
  ship.addEventListener("touchend", (event) => {
    contact = false;
  })

  /* When there is no contact */
  if (!contact) {
    pressure = 0;
  }

  /* Calculate new values */
  destn_value = destn_value + velocity_value + (0.1 * pressure - 1.5) / 2;
  velocity_value = velocity_value + (0.1 * pressure - 1.5);

  checkGameCondition(destn_value, velocity_value);

  /* Update index.html with new values */
  document.getElementById('distance').innerHTML = Math.trunc(destn_value);
  document.getElementById('velocity').innerHTML = Math.trunc(velocity_value);
  document.getElementById('pressure').innerHTML = Math.trunc(pressure);

}

/* Rules of the game (conditions) */
function checkGameCondition(destn, velo) {
  if (destn <= 0) {
    if (velo < -2) {
      alert("You lost");
    } else {
      alert("You won");
    }
    resetGame();
  }
}

/* Reset the game to previous values */
function resetGame() {
  destn_value = 250;
  velocity_value = -25;
  pressure = 0;
}

/**
 * Checks wheter pressure is inbound.
 * @param {*} p Pressure
 */
function pressureInbound(p) {

  if (p > 100) p = 100;
  if (p < 0) p = 0;

}