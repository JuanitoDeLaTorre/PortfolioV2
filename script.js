const header = document.querySelector("#header");
const menuIcon = document.querySelector("#menuIconHamburger");
const subMenu = document.querySelector("#subMenu");
const institutionBlock = Array.from(document.querySelectorAll(".institution"));
const arrows = Array.from(document.querySelectorAll("#arrow"));
const institutionDesc = Array.from(
  document.querySelectorAll(".institutionDesc")
);
const institutionTitle = Array.from(
  document.querySelectorAll("#institutionTitle")
);

document.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    header.style.boxShadow = "0px 0px 30px #67bcb3";
    header.style.opacity = "0.90";
    header.style.borderBottom = "none";
  } else {
    header.style.boxShadow = "none";
    header.style.opacity = "1";
    header.style.borderBottom = "solid 1px white";
  }
});

menuIcon.addEventListener("click", () => {
  if (subMenu.classList.contains("showing")) {
    subMenu.classList.remove("showing");
    subMenu.style.display = "none";
    console.log("removing");
  } else {
    console.log("adding");
    subMenu.classList.add("showing");
    subMenu.style.display = "block";
  }
});

// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", () => {
//     if (arrow.classList.contains("expanded")) {
//       arrow.classList.remove("expanded");
//       arrow.style.transform = "scale(-1,1)";
//       institutionDesc[0].style.display = "none";
//     } else {
//       arrow.style.transform = "scale(1,-1)";
//       arrow.classList.add("expanded");
//       institutionDesc[0].style.display = "block";
//     }

//     console.log("clicked");
//   });
// });

for (let i = 0; i < arrows.length; i++) {
  institutionBlock[i].addEventListener("click", () => {
    if (arrows[i].classList.contains("expanded")) {
      arrows[i].classList.remove("expanded");
      arrows[i].style.transform = "scale(-1,1)";
      institutionDesc[i].style.display = "none";
      institutionTitle[i].style.transform = "scaleX(100%)";
    } else {
      institutionTitle[i].style.transform = "scaleX(105%)";
      arrows[i].style.transform = "scale(1,-1)";
      arrows[i].classList.add("expanded");
      institutionDesc[i].style.display = "block";
    }
  });
}
