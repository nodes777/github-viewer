import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from "./Search";
import RepoList from "./RepoList";
import Repo from "./Repo";

class App extends Component {
	constructor(props) {
		super(props);
		this.handler = this.handler.bind(this);
	}
	state = {
		user: { repos: [] }
	};

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
			<BrowserRouter>
				<div>
					{/*<Navigation />*/}
					<Switch>
						<Route
							path="/"
							render={props => (
								<Search {...props} handler={this.handler} />
							)}
							exact
						/>
						<Route
							path="/:username"
							render={props => (
								<RepoList
									{...props}
									repos={this.state.user.repos}
									handler={this.handler}
								/>
							)}
						/>
						<Route
							path="/:username/:repo"
							render={props => <Repo {...props} />}
						/>
						{/*<Route path="/contact" component={Contact} />
						<Route component={Error} />*/}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
