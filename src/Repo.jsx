import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Repo extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div>
				<Link to={`/:username/${this.props.repoName.name}`}>
					{this.props.repoName.name}
				</Link>
			</div>
		);
	}
}

export default Repo;
