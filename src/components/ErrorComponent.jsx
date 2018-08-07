import React, { Component } from "react";

import Navigation from "./Navigation";

class Error extends Component {
	render() {
		return (
			<div>
				<Navigation
					history={this.props.history}
					heading={`404 Error`}
				/>
			</div>
		);
	}
}

export default Error;
