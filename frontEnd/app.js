//Navbar section starts here

const navbarLink = document.getElementsByClassName("nav-link");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", function () {

  for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].classList.remove("visibility");
  
  }
  closeIcon.classList.remove("visibility");
    menuIcon.classList.add("visibility");
});
closeIcon.addEventListener("click", () => {
    for (let i = 0; i < navbarLink.length; i++) {
      navbarLink[i].classList.add("visibility");
     
    }
    menuIcon.classList.remove("visibility");
    closeIcon.classList.add("visibility");
});

//Navbar section ends here