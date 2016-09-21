var names = "Paola";

var role = "Digital Marketer";

var formattedName = HTMLheaderName.replace("%data%", names);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
    "name": "Paula O",
    "role": "Digital Marketng Specialist",
    "contact": {
        "location" : "Washington, DC",
        "email": "paola@gmail.com",
        "mobile": "(202) 000 0000",
        "twitter": "paola",
    },
    "welcome": "Welcome to my resume!",
    "skills": ["Social Media", "E-mail Marketing", "SEO", "SEM", "HTML", "CSS", "Python", "Javascript"],
    "picture": "/Users/Paola/Desktop/ortiz_final_project/images/fry.jpg",
};

var education = {
    "universities": [{
        "name": "Marketing University",
        "degree": "B.S. of Marketing",
        "dates": "2009-2013"
    }, {
        "name": "Marketing University",
        "degree": "Marketing Masters",
        "dates": "2013-2014"
    }],
};


var work = {
    "jobs": [{
        "employer": "Clothing Store",
        "title": "Marketing Intern",
        "dates": "February - April 2015",
        "description": "Conducted a research project on prices of men's clothing in Latin America",
        "location": "Sevilla, Spain"
    }, {
        "employer": "Non Profit",
        "title": "Digital Marketing Specialist",
        "dates": "February - April 2015",
        "description": "Manage all digital marketing activities.",
        "location": "Washington, DC"
    }]
};


var project = {
    "projects": [{
        "title": "Build a website",
        "dates": "2016",
        "description": "Built a static website about a cake recipe."
    }, {
        "title": "Code your own quiz",
        "dates": "2016",
        "description": "Built a fill in the blank quiz"
    }]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
}


function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
    }
}

displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


function displayProjects() {
    for (project_item in project.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[project_item].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.projects[project_item].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[project_item].description);
        $(".project-entry:last").append(formattedDescription);


    }
}

displayProjects();

function displayEducation() {
    for (education_item in education.universities) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.universities[education_item].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.universities[education_item].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.universities[education_item].dates);
        $(".education-entry:last").append(formattedDates);

    }
}

displayEducation();




$("#mapDiv").append(googleMap);
//
//google.maps.event.addListener(marker, 'click', function() {
//infowindow.open(map, marker);
//});

//addListener();



//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contact_info);
//$("#main").append(bio.picture);
//$("#main").append(bio.welcome);
//$("#main").append(bio.skills);
//$("#main").append(work["position"]);
//$("#main").append(education.name);