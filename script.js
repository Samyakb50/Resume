var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        // console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;
function initialiseBars() {
    for (let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();
function fillBars(){
    for (let bar of progressBars){
        
        let currentWidth = 0;
        let interval = setInterval(function(){
	    let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll() {
    var coordinates = skillContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}