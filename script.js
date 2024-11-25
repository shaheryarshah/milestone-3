//Get information and desplay
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //Generate the Dinamic Resume
    var resumeHTML = "\n<h2><b>Resume<b></h2>\n<h3><b>Personal Information<b></h3>\n<p><b>Name:<b>".concat(name, "</p>\n<p><b>email:<b>").concat(email, "</p>\n<p><b>phone:<b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    //Display Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("the resume display element is missing.");
    }
});
