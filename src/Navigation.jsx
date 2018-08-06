import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/navbar.css";

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
			<div className="navbar text-center">
				<button>
					<img
						src="./icons/backButton.svg"
						alt="Back"
						onClick={this.goBack}
					/>
				</button>
				<h1>{this.props.heading}</h1>
			</div>
		);
	}
}

export default Navigation;
