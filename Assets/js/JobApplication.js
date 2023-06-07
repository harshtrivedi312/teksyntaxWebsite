

  // Application Script
  
    // Step progress bar
    var currentStep = 1;
    var totalSteps = 6;
    var progressBar = $('.progress-bar');

    // Next step function
    $('.next-step').click(function () {
      if (currentStep < totalSteps) {
        $('#step' + currentStep).hide();
        currentStep++;
        progressBar.css('width', ((currentStep - 1) / totalSteps * 100) + '%');
        $('#step' + currentStep).show();
      }
    });

    // Previous step function
    $('.prev-step').click(function () {
      if (currentStep > 1) {
        $('#step' + currentStep).hide();
        currentStep--;
        progressBar.css('width', ((currentStep - 1) / totalSteps * 100) + '%');
        $('#step' + currentStep).show();
      }
    });

    // Submit form function
    $('#jobApplicationForm').submit(function (event) {
      event.preventDefault();
      var formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        education: $('#education').val(),
        university: $('#university').val(),
        experience: $('#experience').val(),
        company: $('#company').val(),
        skills: $('#skills').val(),
        references: $('#references').val()
      };

      // Here, you can perform any desired action with the form data, 
      // such as submitting it to a server via AJAX

      // Example: Display the form data in the console
      console.log(formData);

      // You can redirect the user to a success page or perform any other desired action
      alert('Thank you for submitting your application!');
    });