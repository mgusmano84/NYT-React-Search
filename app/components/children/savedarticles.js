var React = require('react');


// // This is the main component. 
var history = React.createClass({

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




// 	// Here we render the function
	render: function(){

		return(
			<div className="jumbotron">

				<div className="panel panel-default">
  					<div className="panel-heading">
    					<h3 className="panel-title"><strong>History</strong></h3>
  					</div>
  					<div className="panel-body">
    					
  					</div>
				</div>
				

			</div>

		)
	}
});

// // Export the component back for use in other files
module.exports = history;