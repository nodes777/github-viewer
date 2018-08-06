import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/topics">Topics</Link>
				</li>
			</ul>
		);
	}
}

export default Navigation;
