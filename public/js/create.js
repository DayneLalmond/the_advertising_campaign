const adFormHandler = async (event) => {
  event.preventDefault();

  const formElem = document.querySelector('#formElem'); 
  const subject = document.querySelector('#subject-text').value.trim();
  const html = document.querySelector('#html-text').value.trim();


  // let formData = new FormData();
  // formData.append("subject", "html");

  if (subject && html) {
    // Send a POST request to the API endpoint
    const response = fetch('/api/ads', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (response.ok) {
      document.location.replace('/home');

      // const createAd = mailjet
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
      //             Name: "Sup Junior"
      //           }
      //         ],
      //         Subject: subject,
      //         HTMLPart: html,
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

//TODO: query select the correct element from createad.handlebars
document
  .querySelector('.ad-form')
  .addEventListener('submit', adFormHandler);
