function sendEmail(formType) {
  const name = document.querySelector(`input[name="name"]`).value;
  const email = document.querySelector(`input[name="email"]`).value;
  const subject = formType === 'general' ? document.querySelector(`input[name="subject"]`).value : '';
  const message = formType === 'general' ? document.querySelector(`textarea[name="message"]`).value : '';

  let templateParams = {
    name,
    email,
    subject,
    message,
  };

  // Specific parameters for each form type
  if (formType === 'webdev') {
    templateParams.projectDetails = document.querySelector(`textarea[name="projectDetails"]`).value;
    templateParams.budget = document.querySelector(`input[name="budget"]`).value;
    templateParams.timeline = document.querySelector(`input[name="timeline"]`).value;
  } else if (formType === 'webdesign') {
    templateParams.designDetails = document.querySelector(`textarea[name="designDetails"]`).value;
    templateParams.brandGuidelines = document.querySelector(`input[name="brandGuidelines"]`).value;
  } else if (formType === 'itconsulting') {
    templateParams.consultingDetails = document.querySelector(`textarea[name="consultingDetails"]`).value;
    templateParams.servicesNeeded = document.querySelector(`input[name="servicesNeeded"]`).value;
  }

  emailjs.send('service_i402tmb', 'template_n84t3ea', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
    });
}
