var React = require('react');


// // This is the main component. 
var search = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			startYear: "",
			endYear: ""
		}
	},	


	// This function will respond to the user input 
	handleChangeTerm: function(event){

    
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

		// This function will respond to the user input 
	handleChangeStartYear: function(event){


    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

		// This function will respond to the user input 
	handleChangeEndYear: function(event){


    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// When a user submits... 
	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.term);
		
		// Set the parent to have the search term
		this.props.setTopic(this.state.searchTerm);
		// this.props.setStart(this.state.startYear);
		// this.props.setEnd(this.state.endYear);

	},



// 	// Here we render the function
	render: function(){

		return(
			<div className="jumbotron">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>


								<input type="text" className="form-control text-center" id="searchTerm" onChange= {this.handleChangeTerm} required/>
								<br />
								<h4 className=""><strong>Start Year</strong></h4>


								<input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChangeStartYear} required/>
								<br />
								<h4 className=""><strong>End Year</strong></h4>


								<input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChangeEndYear} required/>
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