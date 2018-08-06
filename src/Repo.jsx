import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class Repo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<a href="">{this.props.repoName.name}</a>
			</div>
		);
	}
}

export default Repo;
