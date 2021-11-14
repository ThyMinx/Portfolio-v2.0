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

var req = new XMLHttpRequest();

req.open('GET','https://api.github.com/users/thyminx/starred',true);

req.onload = function(){
    var data = JSON.parse(this.response);
    // console.log(data);

    var projectsHTML = '';
    var count = 0;

    $.each(data, function(i, project){
        count++;
        if(count > 4)
        {
            count = 1;
        }
        console.log('count: ' + count);
        console.log('name: ' + project.name);
        console.log('description: ' + project.description);
        console.log('language: ' + project.language);
        console.log('link: ' + project.html_url);
        projectsHTML += '<div class="project-card">';
        projectsHTML += '<img src="./src/images/project0' + count + '.jpg" class="project-image"/>';
        projectsHTML += '<h3>' + project.name + '</h3>';
        projectsHTML += '<p class="subtext">' + project.description.split('.')[0] + '</p>';
        projectsHTML += '<hr/>';
        projectsHTML += '<p class="subtext"><a class="project-link" href="' + project.html_url + '">View Code Here</a></p>';
        projectsHTML += '</div>';
    });

    projectsHTML += '<div class="project-view-more-card"><div class="project-view-more-card-details"><h3>View more projects</h3><hr/><p class="subtext"><a class="project-link" href="https://github.com/thyminx">Here</a></p></div></div>';

    console.log(projectsHTML);

    $('.project-container').html(projectsHTML);
};

req.send();