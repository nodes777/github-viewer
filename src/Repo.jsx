import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/repo.css";

//to={`/${this.props.repoName.owner.login}/${this.props.repoName.name}`}
class Repo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link
					className="repo"
					to={{
						pathname: `/user/${this.props.repoName.name}`,
						detail: this.props.repoName
					}}
				>
					{this.props.repoName.name}
				</Link>
			</div>
		);
	}
}

export default Repo;
