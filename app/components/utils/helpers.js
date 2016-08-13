// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Geocoder API
var apiKey = "059dc98209a841afa64b4c2e2988a613";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to geolocate. (startyear, endyear)
	runQuery: function(topic){ 

		console.log(topic);
		// console.log(startyear);
		// console.log(endyear);

		//Figure out the geolocation
		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey +'&q='+ topic;

		return axios.get(queryURL)
			.then(function(response){

				console.log("check" + response);
				// return response.data.results[0].formatted;
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
	postHistory: function(topic){

		return axios.post('/api', {topic: topic})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


// We export the helpers function 
module.exports = helpers;