let lienProjet = document.querySelectorAll(".lien");
let profile = document.querySelector(".profile");
let frame = document.getElementById("frame");
let logo = document.querySelector(".logo");

lienProjet.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(element);

    profile.style.display = "none";
    frame.style.display = "block";

    if (element == lienProjet[0]) {
      frame.innerHTML = `
          <iframe src="./Projet1/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
          ></iframe>`;
    }
    if (element == lienProjet[1]) {
      frame.innerHTML = `
            <iframe src="./Projet2/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }

    if (element == lienProjet[2]) {
      frame.innerHTML = `
            <iframe src="./Projet3/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[3]) {
      frame.innerHTML = `
            <iframe src="./Projet4/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[4]) {
      frame.innerHTML = `
            <iframe src="./Projet5/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[5]) {
      frame.innerHTML = `
            <iframe src="./Projet6/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[6]) {
      frame.innerHTML = `
            <iframe src="./Projet7/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[7]) {
      frame.innerHTML = `
            <iframe src="./Projet8/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[8]) {
      frame.innerHTML = `
            <iframe src="./Projet9/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[9]) {
      frame.innerHTML = `
            <iframe src="./Projet10/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
    if (element == lienProjet[10]) {
      frame.innerHTML = `
            <iframe src="./Projet11/index.html" frameborder="0" name="content" style="width:100% ;height:70vh"
            ></iframe>`;
    }
  });
});
logo.addEventListener("click", () => {
  profile.style.display = "flex";
  frame.style.display = "none";
});
const burger = document.querySelector(".burger");
const ulMenu = document.querySelector("#sidenav");
const body = document.getElementsByTagName("body");

burger.addEventListener("click", function () {
  body[0].classList.toggle("active");
});

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  ulMenu.classList.toggle("active");
});

document.querySelector("#sidenav").addEventListener("click", () => {
  burger.classList.remove("active");
  ulMenu.classList.remove("active");
});
