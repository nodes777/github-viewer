import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import Repo from "./Repo";
import Navigation from "./Navigation";

import "./css/repolist.css";

class RepoList extends Component {
	constructor(props) {
		super(props);
		this.getUser = this.getUser.bind(this);
	}

	getUser(username) {
		if (username == null) {
			username = this.refs.username.value;
		}
		fetch(`http://api.github.com/users/${username}/repos`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.props.handler(username, data);
				this.props.history.push(`/${username}`);
			});
		// .catch(data => {
		// 	console.log(data);
		// });
	}

	renderList() {
		// TODO: deconstruct this
		return this.props.repos.repos.map((repo, index) => (
			<Repo key={index} id={index} repoName={repo} />
		));
	}

	render() {
		if (this.props.repos.length === 0) {
			this.getUser(this.props.match.params.username);
			return <div> Loading </div>;
		} else {
			return (
				<div>
					<Navigation
						history={this.props.history}
						heading={`${this.props.repos.name}'s Projects`}
					/>
					<Container>
						<h2 className="mx-auto col-md-5 projectHeading">
							Projects
						</h2>
						<div className="mx-auto col-md-5 repoList">
							{this.renderList()}
						</div>
					</Container>
				</div>
			);
		}
	}
}

export default RepoList;
