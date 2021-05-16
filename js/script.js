import { sportsArray } from "../js/arrays/sportsArray.js";
import { wildLife } from "../js/arrays/wildlife.js";
import { portraits } from "../js/arrays/portraits.js";

let combineSportsAndWildLife = sportsArray.concat(wildLife);
let allArrays = portraits.concat(combineSportsAndWildLife);

let portfolioDisplay = document.querySelector(".row");
let wildLifeButton = document.querySelector(".wildlife");
let sportsButton = document.querySelector(".sports");
let portraitButton = document.querySelector(".portraits");
let allArrayButton = document.querySelector(".allPictures");
let imgModalBody = document.querySelector(".modal-body-image");

sportsButton.addEventListener("click", function () {
  portfolioDisplay.innerHTML = "";
  for (let i = 0; i < sportsArray.length; i++) {
    portfolioDisplay.insertAdjacentHTML(
      "beforeend",
      `<div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 img-containers">
        <img
          src="${sportsArray[i].img}"
          class="img-fluid"
          alt="Responsive image"
        />
      </div>`
    );
  }
});

wildLifeButton.addEventListener("click", function () {
  portfolioDisplay.innerHTML = "";
  for (let i = 0; i < wildLife.length; i++) {
    portfolioDisplay.insertAdjacentHTML(
      "beforeend",
      `<div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 img-containers">
      <img
        src="${wildLife[i].img}"
        class="img-fluid wildlife-img"
        alt="Responsive image"
        data-toggle="modal"
        data-target="#imageModal"
      />
    </div>`
    );
  }
  let wildlifeImg = document.querySelectorAll(".wildlife-img");

  for (let i = 0; i < wildLife.length; i++) {
    wildlifeImg[i].addEventListener("click", function () {
      imgModalBody.innerHTML = `
    
      <img
        src="${wildlifeImg[i].src}"
        class="img-fluid wildlife-img wildlife-img-modal"
        alt="Responsive image"
        data-toggle="modal"
        data-target="#imageModal"
      />
    `;
      console.log(imgModalBody);
    });
  }
});

portraitButton.addEventListener("click", function () {
  portfolioDisplay.innerHTML = "";

  for (let i = 0; i < portraits.length; i++) {
    portfolioDisplay.insertAdjacentHTML(
      "beforeend",
      `<div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 img-containers">
  <img
    src="${portraits[i].img}"
    class="img-fluid"
    alt="Responsive image"
  />
</div>`
    );
  }
});

allArrayButton.addEventListener("click", function () {
  portfolioDisplay.innerHTML = "";

  for (let i = 0; i < allArrays.length; i++) {
    portfolioDisplay.insertAdjacentHTML(
      "beforeend",
      `<div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 img-containers">
    <img
      src="${allArrays[i].img}"
      class="img-fluid"
      alt="Responsive image"
    />
  </div>`
    );
  }
});
