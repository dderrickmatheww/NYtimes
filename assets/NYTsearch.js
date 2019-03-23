$(document).ready(function() {
// variable declaration section
var queryURL;
var searchTerm = $("#searchterm");
var numOfRecords = $("#records");
var startYear = $("#startyear");
var startendYear = $("#endyear");
var results = $("#results")
var apikey = "VKMqxqDUNkiv4uiavLW4oTKhzeQgzgyr"





$.ajax({
  url: queryURL,
  method: "GET",




}).then(function(response) {
console.log(response);
queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey";
searchTerm = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apikey;



  
}