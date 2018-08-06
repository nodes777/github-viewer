import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import Repo from "./Repo";

class RepoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return this.props.repos.map((repo, index) => (
			<Repo key={index} id={index} repoName={repo} />
		));
	}
}

export default RepoList;
