import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import RepoList from "./RepoList";

import "./repoList.css";

class Search extends Component {
	constructor(props) {
		super(props);
		this.getUser = this.getUser.bind(this);
	}

	state = {
		user: { repos: [] }
	};

	getUser() {
		const username = this.refs.username.value;
		console.log(username);
		fetch(`http://api.github.com/users/${username}/repos`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState({
					user: {
						name: username,
						repos: data
					}
				});
			});
	}

	render() {
		return (
			<Container>
				<Row>
					<p>
						<label
							className="text-center"
							htmlFor="searchGithubUserName"
						>
							Github Username
						</label>
					</p>
					<input type="text" ref="username" />
					<button className="btn" onClick={this.getUser}>
						Search
					</button>
				</Row>
				<div className="repoList">
					{" "}
					<RepoList repos={this.state.user.repos} />
				</div>
			</Container>
		);
	}
}

export default Search;
