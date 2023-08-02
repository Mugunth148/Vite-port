
const progressBarContainer = document.querySelector("#progressBarContainer");
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
let debounceResize;

window.addEventListener("scroll", () => {
  let newProgressHeight = window.pageYOffset / totalPageHeight;
  progressBar.style.transform = `scale(1,${newProgressHeight})`;
  progressBar.style.opacity = `${newProgressHeight}`;
}, {
  capture: true,
  passive: true
});

window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalPageHeight = document.body.scrollHeight - window.innerHeight;
  }, 250);
});

progressBarContainer.addEventListener("click", (e) => {
  let newPageScroll = e.clientY / progressBarContainer.offsetHeight * totalPageHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  });
});

// *************************scroll-bar************************

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;
 
  function updateCounter() {
   if(currentValue == 100) {
    return;
   }

   currentValue += Math.floor(Math.random() * 10) + 1;

   if(currentValue > 100) {
    currentValue = 100;
   } 

   counterElement.textContent = currentValue;

   let delay = Math.floor(Math.random() * 200) + 50;
   setTimeout(updateCounter, delay);
  } 

  updateCounter();
}

  startLoader();

  gsap.to(".counter", 1.5, {

    delay: 2.5,
    opacity: 0,
  });

  gsap.to(".bar", 2, {
    delay: 3.5,
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
  });
  //  ************for .overlay is over lapping dark mode************
  gsap.to(".overlay", 2, {
    delay: 5,
    height: 0,
  });
  // *************************Pre loader************************