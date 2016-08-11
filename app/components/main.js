var React = require('react');

// Here we include all of the sub-components
var Search = require('./children/search');
var Results = require('./children/results');
// var History = require('./children/savedarticles');

// Helper Function
// var helpers = require('./utils/helpers.js');

// This is the main component. 
var main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			topic: "",
			startyear: 0,
			endyear: 0,
			results: [],
			history: []
		}
	},	

	// This function allows childrens to update the parent.
	setTopic: function(term){
		this.setState({
			topic: term
		})
	},

	setStart: function(term){
		this.setState({
			startyear: term
		})
	},

	setEnd: function(term){
		this.setState({
			endyear: term
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
						<h2 className="text-center">New York Times Article Scrubber!</h2>
						<p className="text-center"><em>Search for articles of your interest!</em></p>
					</div>

				</div>


				<div classname="row">
						
					<Search setTerm={this.setTerm}/>	

				</div>

				<div classname="row">
						
					<Results setTerm={this.setTerm}/>	

				</div>
		</div>


			
		)
	}
});

// Export the component back for use in other files
module.exports = main;