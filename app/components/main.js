var React = require('react');

// Here we include all of the sub-components
var Search = require('./children/search');
var Results = require('./children/results');
var History = require('./children/savedarticles');

// Helper Function
var helpers = require('./utils/helpers.js');

// This is the main component. 
var main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			topic: "",
			startyear: 0,
			endyear: 0,
			results: [],
			saved: []
		}
	},	

	// This function allows childrens to update the parent.//
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
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.topic != this.state.topic){
			console.log("UPDATED");

			// Run the query for the address
			helpers.runQuery(this.state.topic)
				.then(function(data){
					if (data != this.state.saved)
					{
						console.log("Address", data);

						this.setState({
							results: data
						})

						// After we've received the result... then post the search term to our history. 
						helpers.postHistory(this.state.topic)
							.then(function(data){
								console.log("Updated!");

								// After we've done the post... then get the updated history
								helpers.getHistory()
									.then(function(response){
										console.log("Current History", response.data);
										if (response != this.state.saved){
											console.log ("History", response.data);

											this.setState({
												saved: response.data
											})
										}
									}.bind(this))	
							}.bind(this)
						)
					}
				}.bind(this))
				
			}
	},

	// The moment the page renders get the History**
	componentDidMount: function(){

		// Get the latest history.
		helpers.getHistory()
			.then(function(response){
				if (response != this.state.saved){
					console.log ("History", response.data);

					this.setState({
						saved: response.data
					})
				}
			}.bind(this))
	},


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


				<div className="row">
						
					<Search setTopic={this.setTopic}/>	

				</div>

				<div className="row">
						
					<Results />	

				</div>

				<div className="row">
						
					<History />	

				</div>

		</div>


			
		)
	}
});

// Export the component back for use in other files//
module.exports = main;