// navbar toggle on small screens
const navToggleBtn = document.getElementById("navToggleBtn");

// const display = false;
//display is variable to trigger opacity of .toggle class on navbar
navToggleBtn.addEventListener("click", function (e) {
  const toggle = document.querySelector(".toggle");
  const computedStyle = window.getComputedStyle(toggle);

  if (toggle.style.opacity == 0) {
    toggle.style.opacity = 1;
  } else toggle.style.opacity = 0;
});

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

document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("home");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01, // Adjust as needed
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      // console.log(entries);
      if (entry.isIntersecting) {
        // console.log("home ");
        entry.target.classList.add("fadeIn");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(targetSection);
});

// for  why us section load to fade in
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("why-us");
  const gymDesc = document.getElementById("gym-description");
  const sliderWrapper = document.getElementById("slider-wrapper");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01, // Adjust as needed
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      // console.log(entries);
      if (entry.isIntersecting) {
        // console.log("why container");
        entry.target.classList.add("fadeIn");
        gymDesc.classList.add("leftToRight");
        sliderWrapper.classList.add("fadeToTop");
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
      // console.log(entries);
      if (entry.isIntersecting) {
        // console.log("why para");
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
      // console.log(entries);
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
      // console.log(entries);
      if (entry.isIntersecting) {
        // console.log("msg form loaded");
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

// slider
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slide-button");
  // console.log(slideButtons);
  const sliderScrollbar = document.querySelector(".slider-scrollbar");
  const scrollbarThumb = document.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      // Ensure the scrollbar thumb stays within bounds
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    // Remove event listeners on mouse up
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Add event listeners for drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

console.log("Div.naudiyal@gmail.com");
console.log("8447488739");
