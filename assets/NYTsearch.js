$(document).ready(function() {
// variable declaration section
var queryURL;
var searchTerm = $("#searchterm");
var numOfRecords = $("#records");
var startYear = $("#startyear");
var startendYear = $("#endyear");
var results = $("#results")





$.ajax({
  url: queryURL,
  method: "GET",




}).then(function(response) {
console.log(response);




  
}