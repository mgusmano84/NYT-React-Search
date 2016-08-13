var React = require('react');


// // This is the main component. 
var results = React.createClass({

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

// 	// If the component changes (i.e. if a search is entered)... 


// 	// The moment the page renders get the History


// 	// Here we render the function
	render: function(){

		return(
			<div className="jumbotron">

				

			</div>

		)
	}
});

// // Export the component back for use in other files
module.exports = results;