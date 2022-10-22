const adFormHandler = async (event) => {
  event.preventDefault();

  const formElem = document.querySelector('#formElem'); 
  const subject = document.querySelector('#subject-text').value.trim();
  const html = document.querySelector('#html-text').value.trim();

  // cosnt html1 = "<h1>" + html + "</h1>"

  

  if (subject && html) {
    // Send a POST request to the API endpoint here
    const response = await fetch('/api/ads', {
      method: 'POST',
      body: JSON.stringify({
        subject,
        html
      }),
      headers: {
        'Content-Type': 'application/json'
    },
    })

    if (response.ok) {
      document.location.replace('/home');

    //   const createAd = mailjet
    //   .post('send')
    //   .request({
    //     Messages: [
    //       {
    //         From: {
    //           Email: "dlalmondo@gmail.com",
    //           Name: "Mailjet Pilot"
    //         },
    //         To: [
    //           {
    //             Email: "dlalmondo@gmail.com",
    //             Name: "wrk pls"
    //           }
    //         ],
    //         Subject: "subject",
    //         HTMLPart: "html"
    //       }
    //     ]
    //   });

    // createAd
    //   .then((result) => {
    //     console.log(result.body)
    //   })
    //   .catch((err) => {
    //     console.log(err.statusCode)
    //   });

    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.ad-form')
  .addEventListener('submit', adFormHandler)
