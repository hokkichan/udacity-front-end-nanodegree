/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//const headingHover = document.querySelector('a');

//function onHover() {
//  console.log('The heading was clicked!'); 
//}

//headingHover.addEventListener('mouseover', onHover);
//headingHover.removeEventListener('mouseout', onHover);

function changeNav(){
  //console.clear();
  //console.log("Win Y: "+window.scrollY);
  var navlinks = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
  var sections = document.getElementsByTagName('main')[0].getElementsByTagName('section');
  for (var a=0; a<sections.length; a++) {
    var sectionTop = sections[a].offsetTop;
    var sectionBot = sections[a].offsetTop+sections[a].offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBot) {
    //console.log(sections[a].id+': current');
    navlinks[a].classList.add('current');
    } else {
    //console.log(sections[a].id+':');
    navlinks[a].classList.remove('current');
    }
  }
}

window.addEventListener('onscroll', changeNav());