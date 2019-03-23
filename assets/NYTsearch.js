$(document).ready(function() {
// variable declaration section
var queryURL;
var searchTerm = $("#searchterm");
var numOfRecords = $("#records");
var startYear = $("#startyear");
var endYear = $("#endyear");
var results = $("#results")
var apikey = "VKMqxqDUNkiv4uiavLW4oTKhzeQgzgyr"





$.ajax({
  url: queryURL,
  method: "GET",




}).then(function(response) {
console.log(response);

quertURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apikey + "q=pub_year:(" + startYear + endYear +")&fq=The%20New%20York%20Times";





  
}