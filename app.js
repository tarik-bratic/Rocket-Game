/* Global variables (Delete this) */
let destn_value = 250;
let velocity_value = -25;
let pressure = 25;
let noContact = true;

const ship = document.querySelector("#rs");

/* The game is ongoing (find other way) */
setInterval(updateGameM, 1000);

function updateGameM() {

  //When the finger is moving around, increase pressure +1
  ship.addEventListener("touchmove", (event) => {
    noContact = false;
    pressure++;
    if (pressure > 100) {
      pressure = 100;
    }
  });

  ship.addEventListener("touchend", (event) => {
    noContact = true;
  })

  if (noContact) {
    pressure = decreasePressure(pressure);
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

function decreasePressure(pressure) {
  pressure -= 1;
  if (pressure < 0) {
    pressure = 0;
  }

  return pressure;
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

function resetGame() {
  destn_value = 250;
  velocity_value = -25;
  pressure = 25;
}