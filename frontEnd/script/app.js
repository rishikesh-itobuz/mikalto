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


async function dataGetter() {
  const res = await fetch("http://localhost:8000/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dynamicDataHeroSection(data);
      dynamicImageslider(data);
      dynamicWelcomeSection(data);
    });
}

dataGetter();

function dynamicWelcomeSection(data) {
  document.getElementById("welcomeImg1").src = data["welcome"].image1;
  document.getElementById("welcomeImg2").src = data["welcome"].image2;
  document.getElementById("welcomeImg3").src = data["welcome"].image3;
}

function dynamicDataHeroSection(data) {
  document.getElementById("hero-section").style.backgroundImage = `url(${data["hero"].image})`;
  document.getElementById("hero-heading").innerHTML = data["hero"].heading;
  document.getElementById("hero-subheading").innerHTML = data["hero"].subHeading;
  document.getElementById("about-button").innerText = data["hero"].buttonAbout;
  document.getElementById("homestay-button").innerText = data["hero"].buttonView;
}

function dynamicImageslider(data) {
  document.getElementById("silder-img1").src = data["sliderImages"].sliderImg1;
  document.getElementById("silder-img2").src = data["sliderImages"].sliderImg2;
  document.getElementById("silder-img3").src = data["sliderImages"].sliderImg3;
  let imageCount = 0;
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const sliders = document.getElementsByClassName("sliders");
  const roomType = document.getElementById('room-type');
  const roomFare = document.getElementById('room-fare');
  const bedType = document.getElementById('bed-type');
  const headCount = document.getElementById('head-count');
  const roomArea = document.getElementById('room-area');
  const roomView = document.getElementById('room-view');
  previousButton.addEventListener("click", function () {
    if (imageCount === 0) { 
      imageCount = sliders.length;
    }
     
    let j = imageCount % sliders.length;
    roomType.innerHTML = data["roomDetails"][j].roomType;
    roomFare.innerHTML = data["roomDetails"][j].fare;
    bedType.innerHTML = data["roomDetails"][j].bedType;
    headCount.innerHTML = data["roomDetails"][j].capacity;
    roomArea.innerHTML = data["roomDetails"][j].area;
    roomView.innerHTML = data["roomDetails"][j].view;
    sliders[imageCount % sliders.length].classList.add("hide");
    sliders[imageCount - 1].classList.remove("hide");
    imageCount -= 1;
  });

  nextButton.addEventListener("click", function () {

    sliders[imageCount].classList.add("hide");
    if (imageCount === sliders.length - 1) {
      imageCount = -1;
    }
    let k = imageCount + 1;
    roomType.innerHTML = data["roomDetails"][k].roomType;
    roomFare.innerHTML = data["roomDetails"][k].fare;
    bedType.innerHTML = data["roomDetails"][k].bedType;
    headCount.innerHTML = data["roomDetails"][k].capacity;
    roomArea.innerHTML = data["roomDetails"][k].area;
    roomView.innerHTML = data["roomDetails"][k].view;
    sliders[imageCount + 1].classList.remove("hide");
    imageCount += 1;
  });
  }

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formDetails = {
    checkInTime: document.getElementById("check-in").value,
    checkOutTime: document.getElementById("check-out").value,
    adults: document.getElementById("adult-count").value,
    childrens: document.getElementById("child-count").value,
  };
  fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(formDetails),
  }).then(() => {
    alert("Form submitted successfully!");
    document.getElementById("check-in").value = null;
    document.getElementById("check-out").value = null;
    document.getElementById("adults").value = "0";
    document.getElementById("childrens").value = "0";
  });
});


//Slider section starts here



