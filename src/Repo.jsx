import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/repo.css";

class Repo extends Component {
	render() {
		return (
			<div>
				<Link
					className="repo"
					to={{
						pathname: `/${this.props.repoName.owner.login}/${
							this.props.repoName.name
						}`,
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
