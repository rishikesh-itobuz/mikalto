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

//Slider section starts here

let imageCount = 0;

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const sliders = document.getElementsByClassName("sliders");

previousButton.addEventListener('click',function(){
  if (imageCount === 0)
    imageCount = sliders.length;

  sliders[imageCount%sliders.length].classList.add('hide');
  sliders[imageCount-1].classList.remove('hide');
  imageCount-=1;
})

nextButton.addEventListener('click',function() {
  sliders[imageCount].classList.add('hide');
  if (imageCount === sliders.length-1) {
        imageCount = -1;
  } 
  sliders[imageCount+1].classList.remove('hide');
  imageCount  += 1;
  
})




//Dynamic data of hero section