

const dateTime = document.getElementById("dateTime");

if(dateTime){
    setInterval(() => {
        dateTime.innerHTML = new Date().toLocaleString();
    },1000);
}


let registrations = [];
let count = 0;

const registrationForm = document.getElementById("registrationForm");

if(registrationForm){

registrationForm.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let registerNo = document.getElementById("registerNo").value.trim();
    let event = document.getElementById("event").value;
    let type = document.getElementById("type").value;
    let teamName = document.getElementById("teamName").value.trim();
    let teamSize = document.getElementById("teamSize").value;

    let message = document.getElementById("message");



    if(name === ""){
        message.innerHTML = "Enter name";
        message.className = "error";
        return;
    }

    if(!email.includes("@")){
        message.innerHTML = "Invalid email";
        message.className = "error";
        return;
    }

    if(mobile.length !== 10){
        message.innerHTML = "Mobile number must be 10 digits";
        message.className = "error";
        return;
    }

    if(registerNo === ""){
        message.innerHTML = "Enter register number";
        message.className = "error";
        return;
    }

    if(event === ""){
        message.innerHTML = "Select event";
        message.className = "error";
        return;
    }

   
    if(event === "Web Design"){
        message.innerHTML = "This event is closed";
        message.className = "error";
        return;
    }

   
    if(type === "Team"){

        if(teamName === ""){
            message.innerHTML = "Enter team name";
            message.className = "error";
            return;
        }

        if(teamSize < 2 || teamSize > 4){
            message.innerHTML = "Team size must be between 2 and 4";
            message.className = "error";
            return;
        }
    }

    

    let duplicate = registrations.find(reg =>
        reg.registerNo === registerNo &&
        reg.event === event
    );

    if(duplicate){
        message.innerHTML = "Duplicate registration not allowed";
        message.className = "error";
        return;
    }

    registrations.push({
        name,
        registerNo,
        event
    });

    count++;

    document.getElementById("count").innerHTML = count;

    message.innerHTML = "Registration Successful!";
    message.className = "success";

    let participantList = document.getElementById("participantList");

    let div = document.createElement("div");

    div.innerHTML = `
        <h4>${name}</h4>
        <p>Register No: ${registerNo}</p>
        <p>Event: ${event}</p>
    `;

    participantList.appendChild(div);

    registrationForm.reset();

});
}



let ratings = [];

const feedbackForm = document.getElementById("feedbackForm");

if(feedbackForm){

feedbackForm.addEventListener("submit", function(e){

    e.preventDefault();

    let studentName = document.getElementById("studentName").value.trim();
    let feedbackReg = document.getElementById("feedbackReg").value.trim();
    let feedbackEvent = document.getElementById("feedbackEvent").value;
    let rating = document.getElementById("rating").value;
    let comments = document.getElementById("comments").value.trim();

    if(feedbackReg === ""){
        alert("Enter register number");
        return;
    }

    if(feedbackEvent === ""){
        alert("Select event");
        return;
    }

    if(rating === ""){
        alert("Select rating");
        return;
    }

    if(comments.length < 20){
        alert("Comments must contain minimum 20 characters");
        return;
    }

    ratings.push(Number(rating));

    let total = ratings.reduce((a,b) => a+b,0);

    let avg = total / ratings.length;

    document.getElementById("average").innerHTML = avg.toFixed(1);

    let summary = document.getElementById("feedbackSummary");

    let div = document.createElement("div");

    div.innerHTML = `
        <h4>${studentName}</h4>
        <p>Event: ${feedbackEvent}</p>
        <p>Rating: ${rating}</p>
        <p>${comments}</p>
    `;

    summary.appendChild(div);

    feedbackForm.reset();

});
}