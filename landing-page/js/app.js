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

const navlinks = document.getElementsByTagName('nav')[0].getElementsByTagName('li');
const sections = document.getElementsByTagName('main')[0].getElementsByTagName('section');

window.onscroll = function changeNav() {
  for (var i=0; i<sections.length; i++) {
    var sectionTop = sections[i].offsetTop;
    var sectionBot = sections[i].offsetTop+sections[i].offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBot) {
    navlinks[i].classList.add('current');
    } else {
    navlinks[i].classList.remove('current');
    }
  }
}

