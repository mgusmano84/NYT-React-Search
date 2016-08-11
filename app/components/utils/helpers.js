// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Geocoder API
var geocodeAPI = "059dc98209a841afa64b4c2e2988a613";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to geolocate. 
	runQuery: function(topic, startyear, endyear){

		console.log(topic);
		console.log(startyear);
		console.log(endyear);

		//Figure out the geolocation
		var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + topic + "&pretty=1&key=" + geocodeAPI;

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		})

	},

	// This function hits our own server to retrieve the record of query results
	getHistory: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postHistory: function(location){

		return axios.post('/api', {topic: topic})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


// We export the helpers function 
module.exports = helpers;