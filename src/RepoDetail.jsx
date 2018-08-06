import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class RepoDetail extends Component {
	constructor(props) {
		super(props);
		this.getMarkDown = this.getMarkDown.bind(this);
	}
	state() {
		readme: {
		}
	}

	componentDidMount() {
		this.getMarkDown(
			this.props.location.detail.owner.login,
			this.props.location.detail.name
		);
	}

	getMarkDown(username, reponame) {
		fetch(`http://api.github.com/repos/${username}/${reponame}/readme`)
			.then(res => res.json())
			.then(data => {
				let readmeFile = window.atob(data.content);
				this.setState({ readme: readmeFile });
			});
		// .catch(data => {
		// 	console.log(data);
		// });
	}

	render() {
		return <ReactMarkdown source={this.state.readme} />;
	}
}

export default RepoDetail;
