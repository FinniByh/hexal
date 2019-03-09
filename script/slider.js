
var slider = document.getElementById("slider");
let currentPage = 0;
var buttons = document.getElementById("sliderButtons");

buttons.children[currentPage].style = "background-color: #a4dbd4";
buttons.addEventListener("click", function(e){
    buttons.children[currentPage].style = "background-color: #ddd2c5";

    var currentButton = e.target;

    for (let i=0; i<buttons.children.length; i++) {
        if (buttons.children[i] == currentButton)
            currentPage=i;
    }

    slider.style.left = -currentPage*(document.getElementById("body").offsetWidth-10)+"px";

    buttons.children[currentPage].style = "background-color: #a4dbd4";

})



