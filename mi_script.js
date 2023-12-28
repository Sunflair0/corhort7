var button = $('.submit-btn');
var message = $('.message');

button.on('click', changeTab)

function changeTab(event) {
  event.preventDefault();
  var email = $('.email-input').val();
  message.text(`Thank you for submitting your email ${email}. We will contact you shortly on ways to fight climate change!`);
}

//$(document).ready(function() {
// $('.first-submit').attr('disabled', 'disabled');
// var numFields=0;
// $('#email[type=text').on('input', function() {
//   if ($(this).val() !== '') {
//     numFields++;
//   }
//   if (numFields === 3) {
//     $('.first-submit').removeAttr("disabled");
//   }
// });
// console.log('Thank you so much. Have a nice day.');
//});

//I was inspired from Sandra Cheah's projects. I think the code will come out.

//Otherwise, I'm glad for looking at references to understand how to code properly.

//let modelElem = createModelElement('model.glb', -100, -100, -100);

//sceneElem.appendChild(modelElem);

/*Code would not properly work fore me*/
