// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
   apiKey: "AIzaSyCuiMTFrU5QmPRzF3thOhhUHRUhnEOajMM",
    authDomain: "datas-depplin.firebaseapp.com",
    databaseURL: "https://datas-depplin.firebaseio.com",
    projectId: "datas-depplin",
    storageBucket: "datas-depplin.appspot.com",
    messagingSenderId: "848741942988",
    appId: "1:848741942988:web:244c19b54f85c4e89be469"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('servicios depplin');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var facebook = getInputVal('facebook');
  var instagram = getInputVal('instagram');
  var localidad = getInputVal('localidad');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, facebook, instagram, localidad, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    facebook:facebook,
    instagram:instagram,
    localidad:localidad,
    message:message
  });
}