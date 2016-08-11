var React = require('react');

// Here we include all of the sub-components
// var Form = require('./children/search');
// var Results = require('./children/results');
// var History = require('./children/savedarticles');

// Helper Function
// var helpers = require('./utils/helpers.js');

// This is the main component. 
var main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			results: "",
			history: [] /*Note how we added in this history state variable*/
		}
	},	

	// This function allows childrens to update the parent.
	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},

	// If the component changes (i.e. if a search is entered)... 


	// The moment the page renders get the History


	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2 className="text-center">Address Finder!</h2>
						<p className="text-center"><em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em></p>
					</div>


			</div>

			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = main;