let img = document.querySelectorAll(".img");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

let counter = 0;

img[0].style.display = "block";

// slideshow

right.addEventListener("click", () => {
  if (counter < 3) {
    img[counter].style.display = "none";
    counter++;
    img[counter].style.display = "block";
  } else {
    img[counter].style.display = "none";
    counter = 0;
    img[counter].style.display = "block";
  }
});

left.addEventListener("click", () => {
  if (counter > 0) {
    img[counter].style.display = "none";
    counter--;
    img[counter].style.display = "block";
  } else {
    img[counter].style.display = "none";
    counter = 3;
    img[counter].style.display = "block";
  }
});

// Heart

let heart = document.querySelectorAll(".fa-heart");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    if (heart[i].style.color === "rgb(241, 207, 21)") {
      heart[i].style.color = "red";
    } else {
      heart[i].style.color = " rgb(241, 207, 21)";
    }
  });
}

//inscription

let submit = document.querySelector(".register");
let inscri = document.querySelector(".inscription");
let enregistrer = document.querySelector(".btn-sub");

submit.addEventListener("click", () => {
  inscri.classList.add("active");
});

enregistrer.addEventListener("click", () => {
  inscri.classList.remove("active");
});

//form validation

let firstName = document.querySelector(".firstName");
let LasttName = document.querySelector(".LasttName");
let date = document.querySelector(".date");
let password = document.querySelector(".password");
let btnsubmit = document.querySelector(".btn-submit");

btnsubmit.addEventListener("click", () => {
  if (firstName.value === "") {
    alert("SVP entrer votre prénom!");
  }

  if (LasttName.value === "") {
    alert("SVP entrer votre Nom!");
  }

  let array = password.value.split("");
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase() && Number(array[i]) != array[i]) {
      counter++;
    }
  }

  if (password.value.length < 8 && counter === 0) {
    alert(
      "veuillez entrer un mot de passe qui contient plus de 8 caractères et contient au moins un caractère majuscule"
    );
  } else if (password.value.length < 8 && counter > 0) {
    alert("veuillez saisir un mot de passe contenant plus de 8 caractères");
  } else {
    alert(
      "veuillez entrer un mot de passe qui contient au moins un caractère majuscule"
    );
  }
  let age = 2022 - Number(date.value);
  if (age < 18) {
    alert("Votre âge ne vous permet pas de créer un compte ");
  } else {
    alert("compte crée");
  }
});

//Boutton

let btnplus = document.querySelectorAll(".plus-btn");
let btnmoins = document.querySelectorAll(".minus-btn");
let Quant = document.querySelectorAll(".Quant");
let finalPrice = document.querySelector(".finalPrix");

for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", () => {
    Quant[i].value = Number(Quant[i].value) + 1;
    total();
  });
}

for (let i = 0; i < btnmoins.length; i++) {
  btnmoins[i].addEventListener("click", () => {
    if (Number(Quant[i].value) > 0) {
      Quant[i].value = Number(Quant[i].value) - 1;
      total();
    }
  });
}

//Somme

function total() {
  let regularPrice = document.querySelectorAll(".regular-price");
  let quantity = document.querySelectorAll(".Quant");
  let Buy = document.querySelectorAll(".fa-solid");
  let sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    
      sum += Number(regularPrice[i].innerHTML) * Number(quantity[i].value);
      for (let i = 0; i < Buy.length; i++)
      Buy[i].addEventListener("click", () => {
      finalPrice.value = sum;
    });
  }
}
