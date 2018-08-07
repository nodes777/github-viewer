import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import Navigation from "./Navigation";

class RepoDetail extends Component {
	constructor(props) {
		super(props);
		this.getMarkDown = this.getMarkDown.bind(this);
	}

	state = {
		readme: ""
	};

	componentDidMount() {
		// Uses URL parameters to get markdown
		this.getMarkDown(
			this.props.match.params.username,
			this.props.match.params.reponame
		);
	}

	getMarkDown(username, reponame) {
		fetch(`http://api.github.com/repos/${username}/${reponame}/readme`)
			.then(res => res.json())
			.then(data => {
				// base64 decoding
				let readmeFile = window.atob(data.content);
				this.setState({ readme: readmeFile });
			})
			// If repo doesn't have a README
			.catch(data => {
				console.log(data);
				this.setState({
					readme:
						"This repo does not have a properly formatted README.md file"
				});
			});
	}

	render() {
		return (
			<div>
				<Navigation
					history={this.props.history}
					heading={this.props.match.params.reponame}
				/>
				<ReactMarkdown source={this.state.readme} />
			</div>
		);
	}
}

export default RepoDetail;
