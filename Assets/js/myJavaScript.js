document.addEventListener('DOMContentLoaded', function () {
    // Get the DOM elements
    const happyClientsElement = document.getElementById("happyClients");
    const trainedProfessionalsElement = document.getElementById("trainedProfessionals");
    const placementsElement = document.getElementById("placements");
  
    // Set the initial count values
    let happyClientsCount = 0;
    let trainedProfessionalsCount = 0;
    let placementsCount = 0;
  
    // Set the target count values
    const happyClientsTarget = 50;
    const trainedProfessionalsTarget = 600;
    const placementsTarget = 400;
  
    // Function to update the count values and display them
    function updateCounts() {
      happyClientsElement.textContent = happyClientsCount + " +";
      trainedProfessionalsElement.textContent = trainedProfessionalsCount + " +";
      placementsElement.textContent = placementsCount + " +";
    }
  
    // Increment the counts until the target values are reached
    function incrementCounts() {
      if (happyClientsCount < happyClientsTarget) {
        happyClientsCount++;
      }
      if (trainedProfessionalsCount < trainedProfessionalsTarget) {
        trainedProfessionalsCount++;
      }
      if (placementsCount < placementsTarget) {
        placementsCount++;
      }
  
      updateCounts();
  
      // Stop the interval if all targets are reached
      if (
        happyClientsCount === happyClientsTarget &&
        trainedProfessionalsCount === trainedProfessionalsTarget &&
        placementsCount === placementsTarget
      ) {
        clearInterval(intervalId);
      }
    }
  
    // Call incrementCounts every 10 milliseconds
    const intervalId = setInterval(incrementCounts, 10);
  });
    // Remove existing Bootstrap dropdown event handlers
    $('.dropdown-toggle').dropdown('dispose');
  
    // Show or hide the back-to-top button based on scroll position
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });
  
    // Scroll to top when the button is clicked
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });
 
  