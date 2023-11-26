/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function switch_MHSecretPage(){

    const messages = ["Wrong password hahahahaahhaha", "BROOOO?", "HUH?", "bb youv got this lets go", "Dont give up now :(", "almos there almost there ... KIDDING", "What could the password be hmmmm",
                      "bb princess boo boo come on!", "co len!", "Himmat mut haaro bb <3 <3"]
    if (document.getElementById("password").value == "0909"){
        alert("Hey bb booo princess, congrats on finding the password! I made this hoping that it would make your day :) and I hope you had a fun time. I care alot about you bb :) \n I <3 you")
        window.location.href = "pages/flowers/HookedOnAFeeling.html";
    }
    else{
        alert(messages[Math.floor(Math.random()*messages.length)]);
    }
}


