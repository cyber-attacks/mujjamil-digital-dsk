// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});
});

// Navbar shadow on scroll

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";
nav.style.background="rgba(0,0,0,.55)";

}else{

nav.style.boxShadow="none";
nav.style.background="rgba(0,0,0,.25)";

}

});

// Fade hero image

const heroImage=document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/60;
const y=(window.innerHeight/2-e.pageY)/60;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

// Typing title animation

const titles=[
"Your Trusted Digital Service Center",
"AEPS • Banking • Aadhaar",
"PAN • Passport • Online Forms",
"Printing • Recharge • Money Transfer"
];

let index=0;

setInterval(()=>{

document.title=titles[index]+" | Mujjamil DSK";

index++;

if(index>=titles.length){

index=0;

}

},2500);

// Welcome message

console.log("Welcome to MujjamilDSK.in");
