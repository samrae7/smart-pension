# Smart Pension code test
Code test for Smart Pension: using their sandbox api, create a customer registration form with client-side and server-side validation.

The form has client-side validation for all input fields. It also has a custom validator on the company name input, to check if the company name exists.
If it does it shows the user an error (because the company name should not already be registered) before they submit the form.

Any server errors will appear next to the submit button

##Setup

Run:

`npm start`

This should install npm and bower dependencies and serve the site locally

Browse to http://localhost:8000/

##Tests

Run:

`npm test`

You may need to install karma-cli globally in order to get this to work:

`npm install -g karma-cli`

