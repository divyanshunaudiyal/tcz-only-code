// display home heading word by word
const headerHeading = document.getElementById("home-heading");
const headerHeadingText = headerHeading.textContent;
const whatsappBtn = document.getElementById("whatsapp-btn");
//display header heading word by word with 1 sec gap
let count = 0;
let displayWords = "";
function animateText() {
  let words = headerHeadingText.slice(13, -10).split(" ");
  //   console.log(words.length);
  if (displayWords.length !== words.length) {
    displayWords = displayWords + " " + words[count];
    headerHeading.textContent = displayWords;
    count++;
  }
  if (count == words.length) clearInterval(interval);
}
const interval = setInterval(animateText, 320);

// for  why us section load to fade in
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("why-us");
  const gymDesc = document.getElementById("gym-description");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01, // Adjust as needed
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entries);
      if (entry.isIntersecting) {
        console.log("why container");
        entry.target.classList.add("fadeIn");
        gymDesc.classList.add("leftToRight");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(targetSection);
});

// for gym desc in why us section
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("gym-description");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01, // Adjust as needed
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entries);
      if (entry.isIntersecting) {
        console.log("why para");
        entry.target.classList.add("rightToLeft");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(targetSection);
});

//loading plans section
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("plans");
  const h2 = document.querySelector(".choose-your-plan");
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01, // Adjust as needed
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entries);
      if (entry.isIntersecting) {
        // console.log("hi");
        h2.classList.add("fadeIn");
        entry.target.classList.add("leftToRight");
        card2.classList.add("fadeToTop");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(targetSection);
});

// loading message us form
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("contact-form");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.001, // Adjust as needed
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entries);
      if (entry.isIntersecting) {
        console.log("msg form loaded");
        entry.target.classList.add("fadeIn");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(targetSection);
});

// whatsapp button
whatsappBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phone-num");
  const message = document.getElementById("message");

  whatsappURL =
    "https://wa.me/8447488739" +
    "?text=" +
    `Hi this is ${name.value} ` +
    encodeURIComponent(message.value);
  if (!name.value || !email.value || !phoneNumber.value || !message.value) {
    alert("Enter All Details");
  } else {
    name.value = "";
    email.value = "";
    phoneNumber.value = "";
    message.value = "";
    whatsappBtn.textContent = "Send on Whatsapp";
    window.open(whatsappURL, "blank");
  }
});
