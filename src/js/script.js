const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton(){
    navList.classList.toggle('show');
}

hamburgerBtn.addEventListener('click', toggleButton);

//Any button to navigate to a section of the page can be passed in here. 
//The section of the page must contain the attribute: section="".
//btn = the button element you pass in which the user will click.
function goToSection(btn){
    var section = btn.getAttribute('section');
    document.getElementById(section).scrollIntoView();
}

const aboutMeBtn = document.getElementById('about-me-btn');
aboutMeBtn.addEventListener('click', function(){goToSection(aboutMeBtn);});