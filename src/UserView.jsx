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
		this.handler = this.handler.bind(this);
		console.log(props);
	}

	// Passing this to children so they can affect state
	handler(username, data) {
		this.setState({
			user: {
				name: username,
				repos: data
			}
		});
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<Navigation />
				{/*Search*/}
				<Route
					path="/"
					render={props => (
						<Search {...props} handler={this.handler} />
					)}
					exact
				/>
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
