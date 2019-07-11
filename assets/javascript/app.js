



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBn1WGH0cVXPIH1yZkZePM1aQ6gm5QnzJA",
    authDomain: "ethnic-eats-13032.firebaseapp.com",
    databaseURL: "https://ethnic-eats-13032.firebaseio.com",
    projectId: "ethnic-eats-13032",
    storageBucket: "ethnic-eats-13032.appspot.com",
    messagingSenderId: "256978426670",
    appId: "1:256978426670:web:37329348150d7a63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



M.AutoInit();
        

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $("#login-form").hide();
  
  $("#login-link").on("click", function(){
    $("#login-form").show();
  });

  $("#btn-login").on("click", function(){
      $("#login-form").hide();
  });

  $("#btn-signup").on("click", function(){
    $("#login-form").hide();
  });

  $("#btn-logout").on("click", function(){
    $("#login-form").hide();
  });

