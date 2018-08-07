import React, { Component } from "react";
import { Container, Row } from "reactstrap";

import Navigation from "./Navigation";

import "./css/search.css";

class Search extends Component {
	constructor(props) {
		super(props);
		this.getUser = this.getUser.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this);
	}

	handleKeypress(e) {
		if (e.key === "Enter") {
			this.getUser();
		}
	}

	getUser(username) {
		username = this.refs.username.value;

		fetch(`http://api.github.com/users/${username}/repos`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.props.handler(username, data);
				this.props.history.push(`/${username}`);
			})
			.catch(data => {
				console.log(data);
				//display error message
			});
	}

	render() {
		return (
			<div>
				<Navigation heading="Github Demo Project" />
				<Container>
					<Row>
						<div className="mx-auto flexTextInput">
							<input
								type="text"
								className="form-control"
								ref="username"
								aria-label="Enter a Github username"
								placeholder="Enter a Github username"
								onKeyPress={this.handleKeypress}
							/>
							<div className="input-group-append">
								<button
									className="btn btn-sm"
									onClick={this.getUser}
								>
									<img
										width="50%"
										height="50%"
										src="./icons/CheckmarkButton.svg"
										alt="Search"
									/>
								</button>
							</div>
						</div>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Search;
