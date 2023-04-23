const header = document.querySelector("#header");

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
