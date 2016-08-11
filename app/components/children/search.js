var React = require('react');

// // Here we include all of the sub-components
// // var Form = require('./children/search');
// // var Results = require('./children/results');
// // var History = require('./children/savedarticles');

// // Helper Function
// // var helpers = require('./utils/helpers.js');

// // This is the main component. 
var search = React.createClass({

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

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>


								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<br />
								<h4 className=""><strong>Start Year</strong></h4>


								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<br />
								<h4 className=""><strong>End Year</strong></h4>


								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
			</div>

		)
	}
});

// // Export the component back for use in other files
module.exports = search;