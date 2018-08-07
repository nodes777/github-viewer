import React, { Component } from "react";

import backButtonSVG from "../icons/backButton.svg";

import "../css/navbar.css";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	goBack() {
		this.props.history.goBack();
	}

	render() {
		return (
			<div className="navbar text-center">
				<button>
					<img src={backButtonSVG} alt="Back" onClick={this.goBack} />
				</button>
				<h1>{this.props.heading}</h1>
			</div>
		);
	}
}

export default Navigation;
