

// Firebase configuration
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

  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  var userId;
  var auth = firebase.auth();

//initialize modals for materialize
  $(document).ready(function(){
    $('.modal').modal();
  });


M.AutoInit();
 //parallax scrolling from materialize       
$(document).ready(function(){
  $('.parallax').parallax();
  });

  $("#login-form").hide();
  $("#search-inputs").hide();
  $("#btn-logout").hide();
  $("#login-message-center").hide();

  //toggle login form
  $(document.body).on("click","#login-link", function(){
    if($("#login-form").hasClass("inactive")){
      $("#login-form").show();
      $("#login-form").addClass("active");
      $("#login-form").removeClass("inactive")
      $("#search-inputs").hide();
    } else if ($("#login-form").hasClass("active")) {
      $("#login-form").hide();
      $("#login-form").removeClass("active");
      $("#login-form").addClass("inactive");
    };
  });
//toggle search form
  $("#nav-search").on("click", function(){
    if($("#search-inputs").hasClass("inactive")){
      $("#search-inputs").show();
      $("#search-inputs").addClass("active");
      $("#search-inputs").removeClass("inactive")
      $("#login-form").hide();
    } else if ($("#search-inputs").hasClass("active")) {
      $("#search-inputs").hide();
      $("#search-inputs").removeClass("active");
      $("#search-inputs").addClass("inactive");
    };
  });
  //user login
  $(document.body).on("click","#btn-login", function(){
      $("#login-form").hide();
      var email = $("#email-input").val().trim();
      var pass = $("#password-input").val().trim();
      
      console.log(email);
      console.log(pass);

      var promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e=> console.log(e.message));
  });
//user signUp
  $("#btn-signup").on("click", function(){
    $("#login-form").hide();
      var email = $("#email-input").val().trim();
      var pass = $("#password-input").val().trim();
      

      console.log(email);
      console.log(pass);

      var promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e=> console.log(e.message));
  });

  auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser)
        {
          $("#displayName-input").hide();
          console.log(firebaseUser)
          var logoutLink = $("<a id='logout-link' href='#''>Logout</a>");
          var email = firebaseUser.email;
          var userWelcome = $("<a id='userWelcome' href='#'></a>");
          $(userWelcome).text(email);
          $("#login-logout").empty();
          
          
         // $("#login-logout").prepend("Welcome " + email);
          $("#login-logout").prepend(logoutLink);
          $(document.body).on("click", "#logout-link",  function(){
            firebase.auth().signOut();
          });


        }
        else
        {
          var loginLink = $("<a id='login-link' href='#''>Login</a>");
          //$("#btn-logout").show();
          //$("#btn-login").hide();
          $("#login-logout").empty();
          $("#login-logout").html(loginLink);
          console.log("not logged in")
        }
  });



  $("#btn-logout").on("click", function(){
    $("#login-form").hide();
  });

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "American": null,
        "Mexican": null,
        "Chinese": null,
        "Vietnamese": null,
        "Greek": null,
        "French":null,
        "Spanish":null,
        "Lebanese":null,
        "Peruvian":null,
        "German":null,
        "Portuguese":null,
        "Cajun":null,
        "Korean":null,
        "Venezuelan":null,
        "Indian":null,
        "Agentinian":null,
        "Thai":null,
        "Japanese":null,
        "Italian":null,
        "Zambian":null,
        "Turkish":null,

      },
    });
  });
     

