//////////////////////////////////////////////
// 
//  SLICK SLIDER
// 
//////////////////////////////////////////////

		// Slick Slider
		// http://kenwheeler.github.io/slick/
		$(document).ready(function(){
			iconPreviousPath = "dist/css/images/sprite.svg#iconprevious";
			iconPrevious = '<div class="iconmodal iconmodal-2x"> <a class="iconmodal-x-anchor" href="#"> <svg class="iconmodal-x-icon" xmlns="http://www.w3.org/2000/svg"> <use href="' + iconPreviousPath + '"></use> </svg> <span class="iconmodal-x-label">Previous</span> </a> </div>';
			iconNextPath = "dist/css/images/sprite.svg#iconnext";
			iconNext = '<div class="iconmodal iconmodal-2x"> <a class="iconmodal-x-anchor" href="#"> <svg class="iconmodal-x-icon" xmlns="http://www.w3.org/2000/svg"> <use href="' + iconNextPath + '"></use> </svg> <span class="iconmodal-x-label">Next</span> </a> </div>';
			$('.modalproductdetails-x-slider').slick({
				centerMode: true,
				centerPadding: 'calc(50vw - 480px / 2 - 288px / 2)',
				prevArrow: '<div class="modalproductdetails-x-controlprevious">' + iconPrevious + '</div>',
				nextArrow: '<div class="modalproductdetails-x-controlnext">' + iconNext + '</div>',
				responsive: [
					{
							breakpoint: 1440,
							settings: {
								centerPadding: 'calc(50vw - 480px / 2 - 208px / 2)'
							}
					},
					{
							breakpoint: 1024,
							settings: {
								centerMode: false
							}
					},
					{
							breakpoint: 768,
							settings: {
								arrows: false,
								centerMode: false
							}
					}
				]
			});
		});

//////////////////////////////////////////////
//
//  END SLICK SLIDER
//
//////////////////////////////////////////////



//////////////////////////////////////////////
//
//  DIALOG
//
//////////////////////////////////////////////

		// Logic enables product details buttons
		// to show "modalproductdetails" dialog
		// and enables modal product details
		// close button to close
		// "modalproductdetails" dialog

		// Register variables for DOM elements
		// that need to change when dialog is
		// active
		var inertContainerHeader = document.getElementsByClassName('inertheader');
		var inertContainerHeader = inertContainerHeader[0];
		var inertContainerBody = document.getElementsByClassName('inertbody');
		var inertContainerBody = inertContainerBody[0];
		var modalProductDetailsElement = document.getElementsByClassName('modalproductdetails');
		modalProductDetailsElement = modalProductDetailsElement[0];

		// Add listeners to the buttons that
		// enable them to activate the dialog on
		// user click
		var cardProductSections = document.getElementsByClassName('l-cardproductgrid');
		var cardProductSectionsNum = cardProductSections.length;
		var productDetailsButtons = new Array();
		for (i = 0; i < cardProductSectionsNum; i++) {
				productDetailsButtons[i] = cardProductSections[i].getElementsByClassName('button-secondary');
		}
		// Register function that adds a
		// listener to the object passed to it.
		// The listener calls the
		// modalProductDetailsStateToggle
		// function which accepts one argument
		// that represents the index of the
		// product slide we want to show. It
		// should be an integer that maps to
		// the index of the object.
		function createListenerButtonProductDetail(obj, counter) {
			obj.addEventListener('click',
				function() {
					modalProductDetailsStateToggle(counter);
				}
			);
		}

		// Loop through the
		// productDetailsButtons and add
		// listeners using createListenerButtonProductDetail()
		var counter = 0;
		for (i = 0; i < productDetailsButtons.length; i++) {
				productDetailsButtonsNum = productDetailsButtons[i].length;
				for (ii = 0; ii < productDetailsButtonsNum; ii++) {
						var targetObj = productDetailsButtons[i][ii];
						createListenerButtonProductDetail(targetObj, counter);
						counter++;
				}
		}

		// Register a variable and listener
		// for the button that closes the dialog
		var modalProductDetailsControlClose = modalProductDetailsElement.getElementsByClassName('iconmodal');
		modalProductDetailsControlClose[0].addEventListener('click', modalProductDetailsStateToggle);

		// Register function that toggles the
		// state for each element
		function modalProductDetailsStateToggle(product) {
				modalProductDetailsElement.classList.toggle('modalproductdetails-is-active');
				var productCardID = product;

				$('.modalproductdetails-x-slider').slick('slickGoTo', productCardID);

				// Toggle inert state of 
				// "inertheader" and
				// "inertbody" contents
				var inertAttributeExistsHeader = inertContainerHeader.hasAttribute('inert');
				var inertAttributeExistsBody = inertContainerBody.hasAttribute('inert');
				if (inertAttributeExistsHeader) {
						inertContainerHeader.removeAttribute('inert', 'true');
				} else {
						inertContainerHeader.setAttribute('inert', 'true');
				}
				if (inertAttributeExistsBody) {
						inertContainerBody.removeAttribute('inert', 'true');
				} else {
						inertContainerBody.setAttribute('inert', 'true');
				}

				if (!modalProductDetailsElement.focus()) {
					modalProductDetailsElement.focus();
				}
		}

//////////////////////////////////////////////
//
//  END DIALOG
//
//////////////////////////////////////////////



//////////////////////////////////////////////
//
//  TAB NAVIGATION—FARMER'S MARKET SECTION
//
//////////////////////////////////////////////

		// Register function that adds a
		// listener to the object passed to it.
		function createListenerTabButton(obj, arg) {
			obj.addEventListener('click',
				function() {
					displayTabContent(arg);
				}
			);
		}

		// Function should take an argument
		// that represents the day of the
		// week to display. If no valid
		// argument is passed, set the day
		// of the week to display to "Sunday"
		function displayTabContent(dayofweek) {
			if (!dayofweek) {
				dayofweek = "Sunday";
			}

			for (i=0; i < borderFrames.length; i ++) {
				borderFramesClasses[i] = borderFrames[i].dataset.dayofweek;

				var currentBorderFramesClasses = borderFramesClasses[i];

				// If the string that represents the
				// day of the week we want to display
				// matches any of the strings
				// present in the borderFrameClasses node
				// that corresponds to an element, remove
				// .visuallyhidden from the element,
				// if present, otherwise apply
				// .visuallyhidden to the element to
				// remove it from the display
				if (currentBorderFramesClasses.indexOf(dayofweek) >= 0) {
					borderFrames[i].classList.remove("visuallyhidden");
				} else {
					borderFrames[i].classList.add("visuallyhidden");
				}
			}

			// Check each tab button for a class
			// that matches the dayofweek string,
			// add .tab-is-active class to the
			// one that has it to signify to the
			// user which group of farmer's
			// market information is displayed
			if (tabButtons) {
				for (i=0; i < tabButtons.length; i++) {
					currentTabButton = tabButtons[i];
					if (currentTabButton.classList.contains(dayofweek)) {
							currentTabButton.classList.add("tab-is-active");
					} else {
							currentTabButton.classList.remove("tab-is-active");
					}
				}
			}

			return dayofweek;
		}

		// Locate all elements within the
		// Farmer's Market section that
		// are classed "l-cardgrid-x-card"
		var elementFarmersMarketSection = document.getElementsByClassName("sectionfarmersmarkets");
		elementFarmersMarketSection = elementFarmersMarketSection[0];
		var borderFrameClass = "l-borderframe";
		var borderFrames = elementFarmersMarketSection.getElementsByClassName(borderFrameClass);

		// For each "l-cardgrid-x-card"
		// element, store the class names
		// currently applied to it in an
		// array of arrays named
		// cardClasses
		var borderFramesClasses = new Array();

		// Locate all the tab buttons
		var containerTabButtons = elementFarmersMarketSection.getElementsByClassName("l-tabs");

		if (containerTabButtons[0]) {
			var tabButtons = containerTabButtons[0].getElementsByClassName("tab");
		}

		if (tabButtons) {
			// Assign event listeners to the tab buttons
			// with argument strings
			for (i=0; i < tabButtons.length; i++) {
				switch (i) {
					case 0:
						var dayofweekassignment = "Monday";
						break;
					case 1:
						var dayofweekassignment = "Tuesday";
						break;
					case 2:
						var dayofweekassignment = "Wednesday";
						break;
					case 3:
						var dayofweekassignment = "Thursday";
						break;
					case 4:
						var dayofweekassignment = "Friday";
						break;
					case 5:
						var dayofweekassignment = "Saturday";
						break;
					case 6:
						var dayofweekassignment = "Sunday";
						break;
					default:
						var dayofweekassignment = "Sunday";
				}

				// Allow the user the control the
				// displayTabContent function by
				// invoking it when the tab buttons are
				// clicked
				createListenerTabButton(tabButtons[i], dayofweekassignment);
			}
		}

		// On page load, run displayTabContent to
		// remove elements from view that do not
		// correspond to the dayofweek string
		document.onreadystatechange = function () {
			if (document.readyState === "interactive") {
				displayTabContent();
			}
		};

//////////////////////////////////////////////
//
//  END TAB NAVIGATION—FARMER'S MARKET SECTION
//
//////////////////////////////////////////////