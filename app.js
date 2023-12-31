let destn_value = 250;
let velocity_value = -25;
let pressure = 25;
let notPress = true;

setInterval(updateGame, 1000);

function updateGame() {

  console.log(pressure)

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

  if (notPress) {
    pressure =- 5;
    if (pressure < 0) pressure = 0;
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
    pressure = 25;
  }

  // display on the screen
  document.getElementById('distance').innerHTML = destn_value;
  document.getElementById('velocity').innerHTML = Math.trunc(velocity_value);

}

function keyPress(flag = false) {
  return flag;
}

// document.getElementById('gameBtn').addEventListener("click", myInterval);


