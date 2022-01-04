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

// req.open('GET','https://api.github.com/users/thyminx/starred',true);
// req.open('GET','https://githubinfograbberapi.azurewebsites.net/api/GitHubInfo?url=https://www.github.com/thyminx',true);
req.open('GET','https://localhost:7118/api/GitHubInfo?url=https://www.github.com/thyminx',true);

req.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);

    var projectsHTML = '';
    var count = 0;

    $.each(data.projects, function(i, profile){
        count++;
        if(count > 4)
        {
            count = 1;
        }
        console.log(profile);
        projectsHTML += '<div class="project-card">';
        projectsHTML += '<img src="./src/images/project0' + count + '.jpg" class="project-image"/>';
        projectsHTML += '<h3>' + profile.name + '</h3>';
        projectsHTML += '<p class="subtext">' + profile.description.split('.')[0] + '</p>';
        projectsHTML += '<hr/>';
        projectsHTML += '<p class="subtext"><a class="project-link" href="' + profile.link + '">View Code Here</a></p>';
        projectsHTML += '</div>';
    });

    projectsHTML += '<div class="project-view-more-card"><div class="project-view-more-card-details"><h3>View more projects</h3><hr/><p class="subtext"><a class="project-link" href="https://github.com/thyminx">Here</a></p></div></div>';

    $('.project-container').html(projectsHTML);
};

req.send();