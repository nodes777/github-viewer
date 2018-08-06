import React, { Component } from "react";
// import { Container, Row } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Navigation from "./Navigation";
// import RepoList from "./RepoList";
// import Repo from "./Repo";
// import RepoDetail from "./RepoDetail";
import Search from "./Search";
import UserView from "./UserView";

class App extends Component {
	constructor(props) {
		super(props);
		this.handler = this.handler.bind(this);
	}

	// Keeping state at highest level
	state = {
		user: { repos: [] }
	};

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
			<BrowserRouter>
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
							<UserView {...props} repos={this.state.user} />
						)}
					/>
					{/*<Route component={Error} />*/}
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
