

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
  

  //toggle login form
  $(document.body).on("click","#login-link", function(){
    if($("#login-form").hasClass("inactive")){
      $("#login-form").show();
      $("#login-form").addClass("active");
      $("#login-form").removeClass("inactive");
      $("#search-inputs").hide();
      $("#search-inputs").removeClass("active");
      $("#search-inputs").addClass("inactive");
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
      $("#search-inputs").removeClass("inactive");
      $("#login-form").hide();
      $("#login-form").removeClass("active");
      $("#login-form").addClass("inactive");
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

      auth.signInWithEmailAndPassword(email, pass)
      .then(function(){
          M.toast({html: 'Welcome to Ethnic Eats, you are now logged in'});
      })
      .catch( e => M.toast({
        html: e.message + " Please try again."
      }));
  });

//user signUp
  $("#btn-signup").on("click", function(){
    $("#login-form").hide();
      var email = $("#email-input").val().trim();
      var pass = $("#password-input").val().trim();
      

      console.log(email);
      console.log(pass);
      auth.createUserWithEmailAndPassword(email, pass)
      .then(function(){
        M.toast({html: 'Welcome to Ethnic Eats<br>You have successfully created an account! <br> Since we like you so much, <br> we have already logged you in!'});
    })
    .catch( e => M.toast({
      html: e.message + " Please try again."
    }));
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
          
          
        
          $("#login-logout").prepend(logoutLink);
          $(document.body).on("click", "#logout-link",  function(){
            firebase.auth().signOut();
            M.toast({html: 'You have been successfully logged out.'});
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


  
  var from = 0;
  var to = 4;

  function ajaxCall() {

        var ethnicity = $("#autocomplete-input").val()
        var ingredient = $("#ingredient").val();
        var userQuery = ingredient + "," + ethnicity;
        var queryURL = "https://api.edamam.com/search?&app_id=ba32723a&app_key=90cd3ee1b4bfd97de855e1d17e377a6b&from=" + from + "&to=" + to + "&q=" + userQuery;
        console.log(ethnicity);
        console.log(ingredient);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < 4; i++) {
        
        var foodImage = response.hits[i].recipe.image;
        var foodDescription = response.hits[i].recipe.label;
        var foodURL = response.hits[i].recipe.url;
        var matAdd = $("<a class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a>");
        var matCard = $("<div class='card' style='height:275px; width:250px; float:left;'>");
        var matBody = $("<div class='card-content'>");
        var matText = $("<p>");
        var matImageDiv = $("<div class='card-image'>");
        var matImage = $("<img src='" + foodImage + "' style='height:150px; width:250px;'>");
        var matURL = $("<a href='" + foodURL + "' target='_blank'>");

        $(matText).append(foodDescription);
        $(matBody).append(matText);
        $(matImage).append(foodImage);
        $(matImageDiv).append(matURL);
        $(matImageDiv).append(matAdd);
        $(matCard).append(matImageDiv);
        $(matURL).append(matImage);  
        $(matCard).append(matBody);
        $("#recipe-cards").prepend(matCard);
      }; 
    }); 
  };

  $("#btn-search").on("click", function(t){
    t.preventDefault();
    ajaxCall();
  }); 

  $("#btn-more").on("click", function(t){
    t.preventDefault();
  
    from+=4;
    to+=4;

    ajaxCall();

  });

  
  
  

     

