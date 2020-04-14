document.getElementById("tvQuery").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("tvInput").value;
  if (value === "")
  return;
  console.log(value);

  const url = "http://api.tvmaze.com/singlesearch/shows?q=" + value;
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += '<div class="container-fluid">';
    results += '<div class="row">';
    results += '<div class="col-md-3">';
    results += '</div>';
    results += '<div class="col-md-3">';
    if (json != null)
    {
      results += '<h2>' + json.name + '</h2>';
      results += '<p>';
      if (json.image != null)
      {
          results += '<img src="' + json.image.medium + '"/>';
      }
      results += '</p>';
      if (json.officialSite != null){
        results += '<p> Official Site: <a href="' + json.officialSite + '">' + json.officialSite + '</p></a>';
      }
      if (json.rating.average != null){
          results += '<p>Average Rating: ' + json.rating.average + '</p>';
      }
      else {
          results += '<p>Average Rating: <i>No Rating Available</i></p>';
      }
      results += '<p> Premiered: ' + json.premiered + '</p>';
      results += '<p> Status: ' + json.status + '</p>';
      if (json.network != null)
      {
        results += '<p> Network: ' + json.network.name + '</p>';
      }
      results += '</div>';
      results += '<div class="col-md-3">';
      results += '<br>' + json.summary;
      results += '</div>';
      results += '<div class="col-md-9">';
      results += '</div>';

      results += '</div>';
      results += '</div>';
    }
    else {
      results += '<p> Show Not Found </p>';
    }
    document.getElementById("tvOutput").innerHTML = results;
  });
});


document.getElementById("tvQueryRecommend").addEventListener("click", function(event) {
  event.preventDefault();
  let recommendationNum = Math.floor((Math.random() * 7) + 1);
  let recommendation = "Avatar: The Last Airbender";
  if (recommendationNum === 1){
    recommendation = "Avatar: The Last Airbender";
  }
  else if (recommendationNum === 2) {
    recommendation = "Sherlock";
  }
  else if (recommendationNum === 3) {
    recommendation = "Made in Abyss";
  }
  else if (recommendationNum === 4) {
    recommendation = "Black Mirror";
  }
  else if (recommendationNum === 5) {
    recommendation = "Stranger Things";
  }
  else if (recommendationNum === 6) {
    recommendation = "Fullmetal Alchemist";
  }
  else if (recommendationNum === 7) {
    recommendation = "Planet Earth";
  }

  const value = recommendation;
  if (value === "")
  return;

  const url = "http://api.tvmaze.com/singlesearch/shows?q=" + value;
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += '<div class="container-fluid">';
    results += '<div class="row">';
    results += '<div class="col-md-3">';
    results += '</div>';
    results += '<div class="col-md-3">';
    if (json != null)
    {
      results += '<h2>' + json.name + '</h2>';
      results += '<p>';
      if (json.image != null)
      {
        results += '<img src="' + json.image.medium + '"/>';
      }
      results += '</p>';
      if (json.officialSite != null)
      {
        results += '<p> Official Site: <a href="' + json.officialSite + '">' + json.officialSite + '</p></a>';
      }
      if (json.rating != null){
          results += '<p>Average Rating: ' + json.rating.average + '</p>';
      }
      else {
          results += '<p>Average Rating: <i>No Rating Available</i></p>';
      }
      results += '<p> Premiered: ' + json.premiered + '</p>';
      results += '<p> Status: ' + json.status + '</p>';
      if (json.network != null)
      {
        results += '<p> Network: ' + json.network.name + '</p>';
      }
      results += '</div>';
      results += '<div class="col-md-3">';
      results += '<br>' + json.summary;
      results += '</div>';
      results += '<div class="col-md-9">';
      results += '</div>';

      results += '</div>';
      results += '</div>';
    }
    else {
      results += '<p> Show Not Found </p>';
    }


    document.getElementById("tvOutput").innerHTML = results;
  });
});
