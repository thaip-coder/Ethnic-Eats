function randomFact() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  function parseJson(json) {
    var fact = "<b>" + json["value"] + "</b>";
    document.getElementById("chuckZone").innerHTML = fact;
  }
  
  document.getElementById("btn-chuck").addEventListener("click", function() {
    randomFact();
  });
  randomFact();