console.log("test")

//TODO: change name of function to something more appropriate
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    //TODO: collect the values needed to create a new ad (title and context)
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    //TODO: check if there is a title and context 
    if (email && password) {
      // Send a POST request to the API endpoint
      //TODO: change the url endpoint to match the one where you can POST a new ad
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        //TODO: change the url to the correct one you want to replace 
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  //TODO: query select the correct element from createad.handlebars
  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
