import React, { Component } from "react";
import { Route } from "react-router-dom";

import RepoList from "./RepoList";
import RepoDetail from "./RepoDetail";

class UserView extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div>
				<Route
					exact
					path="/:username"
					render={props => (
						<RepoList
							{...props}
							repos={this.props.repos}
							handler={this.props.handler}
						/>
					)}
				/>
				<Route
					path="/:username/:reponame"
					render={props => (
						<RepoDetail {...props} repodetail={this.props.repos} />
					)}
				/>
			</div>
		);
	}
}

export default UserView;
