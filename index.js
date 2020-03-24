// Get a reference to the nav element of our document.
var nav = document.querySelector("nav");

// A function that removes the mobile-navigation-expaned class from the nav
function collapseMobileNavigation() {
  nav.classList.remove("mobile-navigation-expanded");
}

// And another function that adds that same class.
function expandMobileNavigation() {
  nav.classList.add("mobile-navigation-expanded");
}

// Next we get a reference to the collapse button, which we select via its id
var collapseNavigationButton = document.querySelector(
  "#collapse-mobile-navigation"
);

// And we install an Event Listener, that will be called automatically whenever the button is clicked
// addEventListener takes two arguments, the first is the name of the event we want to listen to, the second is the function that should be executed when the event happens.
collapseNavigationButton.addEventListener("click", collapseMobileNavigation);

// Now we do the same thing but for the expand button.
var expandNavigationButton = document.querySelector(
  "#expand-mobile-navigation"
);
expandNavigationButton.addEventListener("click", expandMobileNavigation);
