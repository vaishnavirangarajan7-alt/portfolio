// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior:'smooth'

        });

    });

});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});

// =============================
// Scroll Animation
// =============================

const cards = document.querySelectorAll(

".education-card,.skill,.project-card,.experience-card,.certificate-card,.contact-card"

);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});

// =============================
// Typing Effect
// =============================

const roles = [

"Front-End Developer",

"React Learner",

"B.Sc IT Student",

"Web Designer"

];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".content h2");

function typeRole(){

if(charIndex < roles[roleIndex].length){

roleElement.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeRole,100);

}
else{

setTimeout(eraseRole,1800);

}

}

function eraseRole(){

if(charIndex>0){

roleElement.textContent=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseRole,50);

}
else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeRole,500);

}

}

roleElement.textContent="";

typeRole();

// =============================
// Scroll To Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}
else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});