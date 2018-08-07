import React, { Component } from "react";
import { Route } from "react-router-dom";

import RepoList from "./RepoList";
import RepoDetail from "./RepoDetail";

class UserView extends Component {
	render() {
		return (
			<div>
				// Route for RepoList of specific github account
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
				//Route for RepoDetail of specific repo
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
