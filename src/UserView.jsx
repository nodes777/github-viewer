import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import RepoList from "./RepoList";
import Repo from "./Repo";
import RepoDetail from "./RepoDetail";
import Search from "./Search";

class UserView extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div>
				{/*	RepoList*/}
				<Route
					exact
					path="/:username"
					render={props => (
						<RepoList
							{...props}
							repos={this.props.repos}
							handler={this.handler}
						/>
					)}
				/>
				<Route
					path="/user/:reponame"
					render={props => (
						<RepoDetail {...props} repodetail={this.props.repos} />
					)}
				/>
			</div>
		);
	}
}

export default UserView;
