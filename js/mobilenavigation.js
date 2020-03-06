//////////////////////////////////////////////
//
//  MOBILE NAVIGATION
//
//////////////////////////////////////////////

    // Logic enables button-iconsolo
    // to show and hide mobilenav module

    // Register variables for DOM
    // elements that need to change when
    // mobilenav is active
    var headerElement = document.getElementsByClassName('header');
    var iconHamburger = headerElement[0].getElementsByClassName('iconhamburger');
    var inertContainerBody = document.getElementsByClassName('inertbody');
    var mobileNavElement = document.getElementsByClassName('mobilenav');

    inertContainerBody = inertContainerBody[0];

    // Register a variable and listener
    // for the button that activates
    // the mobilenav
    var buttonNav = headerElement[0].getElementsByClassName('buttoniconsolo');
    buttonNav[0].addEventListener('click', headerStateToggle);

    // Register function that toggles
    // the state for each element
    function headerStateToggle() {
        headerElement[0].classList.toggle('header-mobilenav');
        mobileNavElement[0].classList.toggle('mobilenav-is-active');
        iconHamburger[0].classList.toggle('iconhamburger-is-close');
        // Toggle inert state of first
        // "inert container" contents
        var inertAttributeExists = inertContainerBody.hasAttribute('inert');
        if (inertAttributeExists) {
            inertContainerBody.removeAttribute('inert', 'true');
        } else {
            inertContainerBody.setAttribute('inert', 'true');
        }
        // Remove focus from button that
        // activates mobilenav to ensure
        // transition animations occur
        // immediately
        buttonNav[0].blur();
    }

//////////////////////////////////////////////
//
//  END MOBILE NAVIGATION
//
//////////////////////////////////////////////