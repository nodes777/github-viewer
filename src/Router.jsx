import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from "./Search";
import RepoList from "./RepoList";

// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import Navigation from "./components/Navigation";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					{/*<Navigation />*/}
					<Switch>
						<Route path="/" component={Search} exact />
						<Route path="/repolist" component={RepoList} />
						{/*<Route path="/contact" component={Contact} />
						<Route component={Error} />*/}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
