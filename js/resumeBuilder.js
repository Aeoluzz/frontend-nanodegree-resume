/******************************************BIO******************************************************/
var bio = {
    "name": "Scherwain Massaquoi",
    "role": "WEB DEVELOPER",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "scherwainm@gmail.com",
        "github": "Aeoluzz",
        "location": "Philadelphia, PA"
    },
    "biopic": "images/scher.jpg",
    "welcomeMessage": "Hello! Welcome to Scherwain Massaquoi Interactive Resume",
    "skills": ["HTML5", "CSS", "JavaScript", "jQuery", "Git", "Illustration"]
};

/****************BIO FUNCTION*********************************/

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskillsStart;

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedMessage);
    $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(formattedSkills);

        for (var i = 0; i < bio.skills.length; i++) {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};


/******************************************WORK******************************************************/

var work = {
    "jobs": [{
        "employer": "Comcast",
        "title": "Regulatory Specialist 2, Cust Svs Ops (Technical)",
        "location": "Philadelphia, Pennsylvania",
        "dates": "2016 - Present",
        "description": "Performed quality control on tickets worked from the local Regulatory Support Team. Ensured all issues mentioned within a Customer's complaint recieved from the Federal Communications Commission, Public Utility Commision or Better Business Bureau are investigated and addressed accordingly. Analyze complaints requiring legal review and escalate to the Legal Department for review. Review resolution/response letter and make final adjustments before submitting to the regulatory agencies. Investigate and relay possible trends regarding signal degaration and node issues to the appropriate for onsite troubleshooting."
    }, {
        "employer": "Comcast",
        "title": "Tier II Technical Support",
        "location": "Bishops Gate, New Jersey",
        "dates": "2014 - 2016",
        "description": "Applied corrective action processes to accurately resolve customer order issues, ensuring customers\' service commitments are met. Isolates and resolves problems by correlating information from network equipment, etc. Notified appropriate individuals and organizations of network outages and restoration events by opening system trouble tickets, as necessary, with the fix agencies. Worked across multiple applications to perform error resolution in order to fulfill service orders that meet original time frame commitments made to customers. Opened and worked tickets through resolution."
    }, {
        "employer": "CompuCom",
        "title": "Configurations Technician Contractor",
        "location": "Paulsboro, New Jersey",
        "dates": "2014",
        "description": "Responsible for the Configuration of Laptops, Desktops, Scanners and Routers with appropriate software specifics pertaining to clients order. Refreshes computers from XP (and similar) to Windows 7 operating systems. Tests configured systems for appropriate functioning and troubleshoot for any errors found. Completed all required documentation of installation including a quality assurance sheet to ensure accurate billing with respect to warranty contract, proper processing of defective products. Followed customer personal computer system hardware and software specifications based on the configuration services being performed and the instructions supplied. Comply with departmental training certification requirements based on configuration level. Troubleshoot malfunctioning units using efficient problem solving techniques and departmental procedures. Worked with Lab Engineers on difficult to solve problems or configurations. Interacted and communicated directly with high level client personnel Technicians."
    }]
};

/****************WORK FUNCTION*********************************/

work.display = function() {

    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(element, index, array) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        });
    }

};



/*******************************************EDUCATION******************************************************/

var education = {
    "schools": [{
        "name": "Penn State University",
        "location": "State College, PA, US",
        "degree": "B.A.",
        "dates": "2004 - 2008",
        "majors": ["New Media"],
        "url": "https://sova.psu.edu/concentration-area/new-media"
    }, {
        "name": "Long Island University (Brooklyn Campus)",
        "location": "Brooklyn, NY, US",
        "degree": "B.A.",
        "dates": "2009 - 2011",
        "majors": ["in Media Arts"],
        "url": "http://www.liu.edu/Brooklyn/Academics/~/link.aspx?_id=2EAFA941A1024583BF6EC2BAE98A0CDE&_z=z"
    }],

    "onlineCourses": [{
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
    }, {
        "title": "JavaScript Fundamentals",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
    }, {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
    }]
};

/****************EDUCATION FUNCTION*********************************/

education.display = function() {

    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(element, index, array) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].majors);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
            var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools[index].url);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolUrl);
        });
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(element, index, array) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineUrl);

        });
    }
};



/******************************************PROJECTS******************************************************/

var projects = {
    "projects": [{
        "title": "Digital Portfolio",
        "dates": "2017",
        "description": "Build a portfolio website showcasing various projects that I've created and worked on.",
        "images": ["images/online-portfolio_sm.png"],
        "url": "http://www.github.com/Aeoluzz"
    }, {
        "title": "Interactive Online Resume",
        "dates": "2017",
        "description": "This is an interactive resume which was designed via HTML CSS and JavaScript",
        "images": ["images/interactive-resume_sm.png"],
        "url": "http://www.github.com/Aeoluzz"
    }]
};

/****************PROJECT FUNCTION*********************************/
projects.display = function() {
    if (projects.projects.length > 0) {
        //check to see if there are available projects
        $("#projects").append(HTMLprojectStart);
        //select the div with an id of projects and append HTMLprojectStart variable

        projects.projects.forEach(function(element, index, array) {
            //Loop through each project and format page with data retrieved
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
            var formattedUrl = HTMLprojectLinks.replace("%data%", projects.projects[index].url);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            $(".project-entry:last").append(formattedUrl);

            //loop through the image array in each project
            if (projects.projects[index].images.length > 0) {
                projects.projects[index].images.forEach(function(element, image, array) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[image]);
                    $(".project-entry:last").append(formattedImage);
                  });
              }
        });
    }
};



/************************************************************************/
//This is for google map
$("#mapDiv").append(googleMap);


/**********************************************************************/
bio.display();
work.display();
education.display();
projects.display();