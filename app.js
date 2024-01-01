/* Global variables (Delete this) */
let destn_value = 250;
let velocity_value = -25;
let pressure = 25;
let notPress = true;

/* The game is ongoing (find other way) */
setInterval(updateGame, 1000);

/**
 * The function is about updating the game and check conditions and what not.
 */
function updateGame() {

  console.log(pressure)

  /* Event listeners for when key "W" is press or not */
  addEventListener("keydown", (event) => {
    if (event.code == "KeyW") {
      pressure += 10;
      if (pressure > 100) pressure = 100;
      if (pressure < 0) pressure = 0;
      notPress = false;
    }
  });

  addEventListener("keyup", (event) => {
    notPress = true;
  })

  /* If no key is pressed decrease pressure */
  if (notPress) {
    pressure =- 5;
    if (pressure < 0) pressure = 0;
  }

  /* Calculate the new values based of the amount of pressure */
  destn_value = destn_value + velocity_value + (0.1 * pressure - 1.5) / 2;
  velocity_value = velocity_value + (0.1 * pressure - 1.5);

  /* Rules of the game (conditions) */
  if (destn_value <= 0) {
    if (velocity_value < -2) {
      alert("You lost");
    } else {
      alert("You won");
    }

    destn_value = 250;
    velocity_value = -25;
    pressure = 25;
  }

  /* Update index.html with new values */
  document.getElementById('distance').innerHTML = destn_value;
  document.getElementById('velocity').innerHTML = Math.trunc(velocity_value);

}

/**
 * 
 * @param {*} flag if key is pressed true if not false
 * @returns 
 */
function keyPress(flag = false) {
  return flag;
}