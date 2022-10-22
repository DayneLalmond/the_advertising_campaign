const logoutFormHandler = async (event) => {
  event.preventDefault();


  // Send a POST request to the API endpoint
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/home');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#logout')
  .addEventListener('click', logoutFormHandler);
