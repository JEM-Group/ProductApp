import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
var search = require('youtube-search');

var opts = {
  maxResults: 5,
  key: 'AIzaSyDZ4lWg5nBC6TvLtD2Np3uMw2ymVVGzHy0 '
};

class YoutubeSearch extends Component {
	constructor() {
		super();
		this.state = {
			videos: []
		}
	};
	componentDidMount() {
		search('cars', opts, function(err, results) {
		  if(err) return console.log(err);
		 
		  console.dir(results);
		  return results.json()
		}).then(data => {
			let videos = data.results.map((video) => {
				return (
					<div key={video.results}>
				    <img src={video.thumbnailImg} />
	        </div>
	      )
			})
			this.setState({videos: videos});
			console.log("state", this.state.videos);
		})
	}

	render() {
		return (
			<div>
				<form>
		      <Input
		        value={this.state.title}
		        onChange={this.handleInputChange}
		        name="title"
		        placeholder="Title (required)"
		      />
		      <Input
		        value={this.state.author}
		        onChange={this.handleInputChange}
		        name="author"
		        placeholder="Author (required)"
		      />
		      <TextArea
		        value={this.state.synopsis}
		        onChange={this.handleInputChange}
		        name="synopsis"
		        placeholder="Synopsis (Optional)"
		      />
		      <FormBtn
		        disabled={!(this.state.author && this.state.title)}
		        onClick={this.handleFormSubmit}
		      >
		        Submit Book
		      </FormBtn>
		    </form>

				<div className = "container2">
				  <div className = "container1">
				    {this.state.videos}
				  </div>
				</div>
			</div>
		)
	}
}


export default YoutubeSearch;