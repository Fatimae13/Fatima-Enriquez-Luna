const body = document.body;

// footer

let footer = document.createElement("footer");
 body.appendChild(footer);

 const today = new Date();
 const thisYear = today.getFullYear();


const copyright = document.createElement("p");
copyright.innerHTML = `\u00A09 Fatima Enriquez ${thisYear}`;
footer.appendChild(copyright);

footer.style.textAlign = "center"; 


///---- skills----
const skills= ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

const skillsSelection = document.getElementById("Skills");
const skillsList = skillsSelection.querySelector("ul");

for(let i=0; i< skills.lenght; i++) {
    const skill= document.createElement("li");
    skill.innerText = skill[i];
    skill.appendChild(skills);

}

