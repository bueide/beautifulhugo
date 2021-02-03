var main = {
  init : function() {

    // Shorten the navbar after scrolling a little bit down	

    const nav = document.querySelector('nav');  
    window.onscroll = () => {
      let rect = nav.getBoundingClientRect();
      let offset = rect.top + window.scrollY;
        if (offset > 50) {
          nav.classList.add('top-nav-short');
        } else {
          nav.classList.remove('top-nav-short');
        }
       }

    // On mobile, hide the avatar when expanding the navbar menu

    const navID = document.getElementById('navbarSupportedContent');
    navID.addEventListener('show.bs.collapse', () => nav.classList.add('top-nav-expanded'));
    navID.addEventListener('hidden.bs.collapse', () => nav.classList.remove('top-nav-expanded'));

    // On mobile, when clicking on a multi-level navbar menu, show the child links

    const navLink = document.getElementsByClassName('nav-link');
    navID.addEventListener('click', navLink, e => {
      let target = e.target;
      navLink.forEach((value, key) => {
        if (value == target) {
          value.parentNode.classList.toggle('show-children');
        } else {
          value.parentNode.classList.remove('show-children');
        }
      });
    });
  },
};
document.addEventListener('DOMContentLoaded', main.init);

const toggleColorMode = e => {
  // Switch to Light Mode
  if (e.currentTarget.classList.contains("light--hidden")) {
    // Sets the custom html attribute
    document.documentElement.setAttribute("data-color-mode", "light");
    
    // Sets the user's preferences in local storage
    localStorage.setItem("data-color-mode", "light");
    return;
  }
  
  /* Switch to Dark Mode
  Sets the custom html attribute */
  document.documentElement.setAttribute("data-color-mode", "dark");
  
  // Sets the user's preference in local storge 
  localStorage.setItem("data-color-mode", "dark");
};

// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

// Set up event listeners
toggleColorButtons.forEach(btn => {
  btn.addEventListener("click", toggleColorMode);
});

// Respect user's color scheme preference 
if (
  localStorage.getItem('data-color-mode') === 'dark' ||
  (window.matchMedia( '(prefers-color-scheme: dark)').matches && !localStorage.getItem('data-color-mode'))
) {
  document.documentElement.setAttribute('data-color-mode', 'dark')
}