document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow validation
  
    // Clear previous error messages
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Simple validation
    if (name === '') {
      errorMessage.textContent = 'Please enter your name.';
      return;
    }
  
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }
  
    if (message === '') {
      errorMessage.textContent = 'Please enter a message.';
      return;
    }
  
    // If all validation passes, submit the form
    this.submit();
  });
  
  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  