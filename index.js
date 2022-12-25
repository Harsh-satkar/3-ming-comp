const timeline = gsap.timeline({default: {duration: 1}})

timeline
// .from("h1", {duration: 3, y: "-100%", ease: "power1"})
// .from("p", {duration: 100, x: "-100%"})




const about = document.querySelector("span");
const aboutContent = document.querySelectorAll(".about");
const head = document.querySelectorAll(".head");

// displaying the home and about of page
about.addEventListener("click", ()=> {
    
        head[0].classList.toggle("dis-head");
        head[1].classList.toggle("dis-head");
    
    aboutContent[0].classList.toggle("complete");
    aboutContent[1].classList.toggle("complete");
})