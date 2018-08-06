import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.goBack = this.goBack.bind(this);
		console.log(this.props);
	}

	goBack() {
		this.props.history.goBack();
	}

	render() {
		return (
			<div>
				{" "}
				<button onClick={this.goBack}>Go Back</button>
				<h1>{this.props.heading}</h1>
			</div>
		);
	}
}

export default Navigation;
