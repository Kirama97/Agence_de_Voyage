


const burguer = document.querySelector(".burguer");
const nav = document.querySelector(".nav_link");


burguer.addEventListener("click", () => {
  
  nav.classList.toggle("active");
  burguer.classList.toggle("active");
});
