// HTML ELEMENTS //
	let robotArr = [0, 1, 2];
	let robotCara = ['rock', 'leaf', 'scissors'];

// FUNCTIONS TO CALL
	let winnerScore = [userScore = 0, machineScore = 0];
	let winnerScoreContainer = [$('#userSpanVictories'), $('#robotSpanVictories')];
	let winnerSetStorage = ['userVictories', 'machineVictories'];

	let comparison = (msg, i) => {
		$('h4').text(`${msg}`);
		// save the machine or user victory in local storage & show it
		winnerScore[i] += 1 ;
		window.localStorage.setItem(winnerSetStorage[i], winnerScore[i]);
	}

	let showWinnerScore = (i, localStorage) => {
		winnerScoreContainer[i].text(`${localStorage}`);
	}

// VALUES STORAGE ALGORITHM (EVENT) : add decorations to labels & store machine/user values
	$('.choice').each((key, item) => {
		$(item).on('click', () => {

		// REMOVE STYLES FROM LABELS
			$('label').each((keyLabel, itemLabel) => {$(itemLabel).removeClass()})

		// STORAGE
			/*when the user click on input : store his response & 
			the machine get a random Choice*/
			let userChoice = parseInt($(item).attr('id'));
			let robotChoice = Math.floor(Math.random() * robotArr.length);

		// SHOW RESULT & ADD STYLE TO LABELS
			// show the robot value (by using labels's content)
			for (let i = 0; i <= robotArr.length; i++) {
				if (robotChoice == i){
					$('#robotChoiceImg').html(`<img src="assets/img/${robotCara[i]}.svg" alt="Image de ce que le robot a joué : ${$($('label')[i]).text()}">`)
					// add a class from the robotCara array, while the input is selected (key)
					$($('label')[key]).addClass(robotCara[i]);
				}
			}

		// COMPARISON ALGORITHM & STORAGE OF SCORES //
/*equality*/	if (userChoice==robotChoice) {
					$('h4').text('Egalité');
 /*winning*/	} else if ((userChoice==0 && robotChoice==2)
 				 	   || (userChoice==1 && robotChoice==0) 
 				 	   || (userChoice==2 && robotChoice==1)) {
					comparison('Gagné', 0);
					showWinnerScore(0, localStorage.userVictories);
  /*defeat*/	} else {
					comparison('Perdu', 1);
					showWinnerScore(1, localStorage.machineVictories);
				}

		// DEBUG ONLY //
			let debugNames = () => {
				for (let i = 0; i <= robotArr.length; i++) {
					if(userChoice == i){var userResult =  $($('label')[i]).text()};
					if(robotChoice == i){var robotResult =  $($('label')[i]).text()};
					if(typeof(userChoice || robotChoice) != 'number'){var robotResult = 'NaN' ; var userResult = 'NaN'};
				}
				console.log(`user ${userChoice} : ${userResult}`);
				console.log(`robot ${robotChoice} : ${robotResult}`);
			}

			debugNames(userChoice, robotChoice);
		}) // input EVENT CLICK
	}) // choice EACH

// remove moving clouds
	$('#slidingContainer').on('click', () => {
		// add style to the sliding button
		$('#slidingFill').toggleClass('slidingFillOff');
		$('#slidingImg').toggleClass('slidingImgOff');

		// remove or show moving clouds
		$('#cloudsContainer').toggle();
})