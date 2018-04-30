// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(bbcData) {
  // First, empty the table
  $("tbody").empty();
  console.log(bbcData);

  // Then, for each entry of that json...
  bbcData.forEach(function(headline) {
    console.log(headline);
    // Append each of the animal's properties to the table
    $("tbody").append("<tr><td>" + headline.title + "</td><td>" + headline.summary + "</td><td>"+ "http://www.bbc.com" + headline.link + "</td></tr>");  
  //User Note inputs here
  $("tbody").append("<tr><td><textarea id='bodyinput' name='body'></textarea></td></tr>"); 
  
  $("tbody").append("<tr><td><button data-id='" + headline._id + "' id='savenote'>Save Note</button></td></tr>"); 


    // add photos later
 

  });
}

// Bonus function to change "active" header
function setActive(selector) {
  // remove and apply 'active' class to distinguish which column we sorted by
  $("th").removeClass("active");
  $(selector).addClass("active");
}

// 1: On Load
// ==========

// First thing: ask the back end for json with all animals
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  // displayResults(data);
});

// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#weight-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#animal-weight");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/weight", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#name-sort").on("click", function() {
  console.log("Button works!")
  // Set new column as currently-sorted (active)
  setActive("#animal-name");

  // Do an api call to the back end for json with all animals sorted by name
  $.getJSON("/name", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});
