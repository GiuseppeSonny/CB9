import { log } from "./helpers.js";
import NavigationLink from "./components/NavigationLink.js"; //importa un file js da un'altra cartella

console.log(NavigationLink);

fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((categories) => {
    const navLink = categories.map((cat, idx) =>
      NavigationLink({ href: `#${idx}`, text: cat })
    );

    log(navLink);

    const NAV_EL = document.querySelector(".navigation");
    NAV_EL.append(...navLink);

    const navigationEls = document.querySelectorAll(".navigation--link");

    navigationEls.forEach((el) => {
      el.addEventListener("click", (event) => {
        log(event);
      });
    });
  });
