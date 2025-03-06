var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

obstacles.style.animation = "none";
function sauter() {
  //function pour faire sauter le personnage

  if (perso.classList != "animation") {
    perso.classList.add("animation");
  }
  setTimeout(function () {
    perso.classList.remove("animation");
  }, 500);
}
var verification;
function start() {
  var speed = 2.5;
  //verifier si l'obstacle touche le personnage
  verification = setInterval(function () {
    obstacles.style.animation = `anime-obstacles ${speed}s infinite`;
    var persoTop = parseInt(
      window.getComputedStyle(perso).getPropertyValue("top")
    );
    var obstaclesLeft = parseInt(
      window.getComputedStyle(obstacles).getPropertyValue("left")
    );

    if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
      stop();

      speed = 2.5;
    } else {
      speed = speed - 0.0001;
    }
  }, 1);
}

function stop() {
  alert("vous avez perdu");
  obstacles.style.animation = "none";
  clearInterval(verification);
}
