const adFormHandler = async (event) => {
  event.preventDefault();

  const formElem = document.querySelector('#formElem'); 
  const email = document.querySelector('#email-to').value.trim();
  const subject = document.querySelector('#subject-text').value.trim();
  const html = document.querySelector('#html-text').value.trim();

  // cosnt html1 = "<h1>" + html + "</h1>"


  if (email && subject && html) {
    // Send a POST request to the API endpoint here
    const response = await fetch('/api/ads', {
      method: 'POST',
      body: JSON.stringify({
        email,
        subject,
        html
      }),
      headers: {
        'Content-Type': 'application/json'
    },
    })

    if (response.ok) {
      document.location.replace('/sent');
    
    } else {
      function clear() {
        document.querySelector('#email-to').value = '';
        document.querySelector('#subject-text').value = '';
        document.querySelector('#html-text').value = '';
    }
    clear()
    }
  }
};

document
  .querySelector('.ad-form')
  .addEventListener('submit', adFormHandler)
