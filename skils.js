//Check there loacl Storage Color OPtion
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    //console.log("loacl storage its not null on root now");
    //  console.log(localStorage.getItem("color_option"));
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
    //Remove the class active from all colors items

    document.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");

        //add active calss on element with data-color== local Storage item

        if (element.dataset.color === mainColors) {
            //add active class
            element.classList.add("active");

        }
    });

}
// add class to change color
document.querySelector(".toggle-seting .fa-gear ")
    .onclick = function () {
        this.classList.toggle("fa-spin");

        document.querySelector(".seting-box").classList.toggle("open");
    }

const colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach(li => {

    li.addEventListener("click", (e) => {
        // set color in root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        //set Color on yhe local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        //Remove the class active 
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");

        });
        //add active class on element
        e.target.classList.add("active");
    });
});
//------------------------------start our Skills -------------------------------
let ourSkills = document.querySelector(".skllis");

console.log(ourSkills.offsetHeight);
window.onscroll = function () {

    //skills of set top
    let skillsOfsetTop = ourSkills.offsetTop;

    //our outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //window height
    let windowHeight = this.innerHeight;
    //window scroll top
    let windowScrolltop = this.pageYOffset;

    if (windowScrolltop > (skillsOfsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });
    }

};