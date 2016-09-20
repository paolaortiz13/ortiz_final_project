
//var name = "Paola";

//var role = "Digital Marketer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);


var bio = {
	"name" : "Paula O",
	"role" : "Digital Marketng Specialist",
	"contact" : {
		"email" : "paola@gmail.com",
		"mobile" : "(202) 000 0000",
		"twitter" : "paola",		
	},
	"welcome" : "Welcome to my resume!",
	"skills" : ["Social Media", "E-mail Marketing", "SEO", "SEM", "HTML", "CSS", "Python", "Javascript"],
	"picture" : "/Users/Paola/Dropbox/Udacity Intro to programming/Stage 5/frontend-nanodegree-resume-master/images", 
};

var education = {
		"universities": [
		 {
			"school" : "Marketing University",
			"degree"	: "B.S. of Marketing",
			"dates" : "2009-2013"
		 },
		  {
			"school" : "Marketing University",
			"degree"	: "Marketing Masters",
			"dates" : "2013-2014"
		 }
	],
		"certificates": [	 
		{ 
		 	"school" : "General Assembly",
		 	"course" : "Digital Marketing",
		 	"dates" : "2015-2015" 	
		 },
		 {
		 	"school" : "Udacity",
		 	"course" : "Intro to Programming",
		 	"dates" : "2016-2016" 	
		 }
	]
};


var work = {
		"jobs": [
		 {
			"employer" : "Clothing Store",
			"title"	: "Marketing Intern",
			"dates" : "February - April 2015",
			"description" : "Conducted a research project on prices of men's clothing in Latin America"
		 },
		 {
			"employer" : "Non Profit",
			"title"	: "Digital Marketing Specialist",
			"dates" : "February - April 2015",
			"description" : "Manage all digital marketing activities."
		 }
	]
};	


var project = {
		"projects" : [
			{
				"title" : "Build a website",
				"dates" : "2016",
				"description" : "Built a static website about a cake recipe."
			},
			{
				"title" : "Code your own quiz",
				"dates" : "2016",
				"description" : "Built a fill in the blank quiz"
			}			
		]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace ("%data%", bio.skills[0]);
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
	}
}	

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
} );


projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].Description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length>0) {
			for (image in projects.projects[projects].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[projects].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

$("#mapDiv").append(googleMap);

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});

//function locationizer(work_obj) {
//	var locationArray = [];

//	for (job in work_obj.jobs) {
//		var newLocation = work_obj.jobs[job].location;
//		location.Array.push(newLocation);
//	}

//	return locationArray;
//}


//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contact_info);
//$("#main").append(bio.picture);
//$("#main").append(bio.welcome);
//$("#main").append(bio.skills);
//$("#main").append(work["position"]);
//$("#main").append(education.name);


