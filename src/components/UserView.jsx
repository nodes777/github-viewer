import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import ErrorComponent from "./ErrorComponent";
import RepoList from "./RepoList";
import RepoDetail from "./RepoDetail";

class UserView extends Component {
	render() {
		return (
			<Switch>
				{/*404 error handler*/}
				<Route path="/nopage" component={ErrorComponent} />

				{/*Route for RepoList of specific github account*/}
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
				{/*Route for RepoDetail of specific repo*/}
				<Route
					exact
					path="/:username/:reponame"
					render={props => (
						<RepoDetail {...props} repodetail={this.props.repos} />
					)}
				/>
			</Switch>
		);
	}
}

export default UserView;
