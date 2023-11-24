const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact,.slide-section,.skill-container',{delay:200, origin:'bottom'})

// Randomizer
const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

document.getElementById("randomizer").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 18);
}

//Dark Mode
var icon = document.getElementById("icon");
icon.onclick = () => {
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
		icon.src = "img/sun.png";
	}
	else{
		icon.src = "img/moon.png";
	}
};

//Automatic Slider
var slidetimer = setInterval(function(){document.getElementById('next').click()}, 3000)

//Slider
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    clearInterval(slidetimer)
    slidetimer = setInterval(function(){document.getElementById('next').click()}, 3000)
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    clearInterval(slidetimer)
    slidetimer = setInterval(function(){document.getElementById('next').click()}, 3000)
}