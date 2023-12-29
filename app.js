let destn_value = 250;
let velocity_value = -25;

function updateGame() {

  // user input
  let pressure = document.getElementById('gameInput').value;

  // Error message
  if (pressure < 0 || pressure > 100) {
    alert("Invalid pressure, 0 to 100");
    return;
  }

  //calculate destn and velocity
  destn_value = destn_value + velocity_value + (0.1 * pressure - 1.5) / 2;
  velocity_value = velocity_value + (0.1 * pressure - 1.5);

  if (destn_value <= 0) {
    if (velocity_value < -2) {
      alert("You lost");
    } else {
      alert("You won");
    }

    destn_value = 250;
    velocity_value = -25;
  }

  // display on the screen
  document.getElementById('distance').innerHTML = destn_value;
  document.getElementById('velocity').innerHTML = velocity_value;

}

document.getElementById('gameBtn').addEventListener("click", updateGame);