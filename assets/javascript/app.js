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
        
$(document).ready(function(){
  $('.parallax').parallax();
  });

  $("#login-form").hide();
  $("#search-inputs").hide();
  
  $("#login-link").on("click", function(){
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
  
  $("#btn-login").on("click", function(){
      $("#login-form").hide();
      var email = $("#email-input").val().trim();
      var pass = $("#password-input").val().trim();
      var auth = firebase.auth();

      console.log(email);
      console.log(pass);

      var promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e=> console.log(e.message));
  });

  $("#btn-signup").on("click", function(){
    $("#login-form").hide();
      var email = $("#email-input").val().trim();
      var pass = $("#password-input").val().trim();
      var auth = firebase.auth();

      console.log(email);
      console.log(pass);

      var promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e=> console.log(e.message));
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

  $("#btn-search").on("click", function(){
    var ethnicity = $("#autocomplete-input").val()
    var ingredient = $("#ingredient").val();
    var userQuery = ingredient + "," + ethnicity;
    var queryURL = "https://api.edamam.com/search?&app_id=ba32723a&app_key=90cd3ee1b4bfd97de855e1d17e377a6b&from=0&to=9&q=" + userQuery;
    console.log(ethnicity);
    console.log(ingredient);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < 4; i++) {
        var foodImage = response.data[i].hits.recipe.image;
        //var foodURL = response.data[i].hits.recipe.url;
        var foodDescription = response.data[i].hits.recipe.label;
        var matCard = $("<div class='card'>")
        var matBody = $("<div class='card-content'>")
        var matText = $("<p>")
        var matImage = $("<div class='card-image'>")

        $(matText).append(foodDescription);
        $(matBody).append(matText);
        $(matImage).append(foodImage);
        $(matCard).append(matImage);
        $(matCard).append(matBody);
        $("#recipe-cards").prepend(matCard);
      }; 
    }); 
  }); 
     

