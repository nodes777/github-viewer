import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from "./components/Search";
import UserView from "./components/UserView";

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
	}

	render() {
		return (
			<BrowserRouter>
				{/*Switch for Search or Userview*/}
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
							<UserView
								{...props}
								handler={this.handler}
								repos={this.state.user}
							/>
						)}
					/>
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
