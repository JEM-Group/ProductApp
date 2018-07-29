import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import YoutubeSearch from "../../components/YoutubeSearch";
import ResultList from "../../components/ResultList"
import API from "../../utils/API";
import dateToRfc3339 from "../../utils/dateToRfc3339";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

//require youtube-search package
const search = require('youtube-search');

// Parsing date from one week ago
const days = 7;
const date = new Date();
const xDaysAgo = date.setTime(date.getTime() - (days * 24 * 60 * 60 * 1000));
const xDaysAgoDate = new Date(xDaysAgo);
const xDaysAgoRfc = dateToRfc3339.dateToRfc3339(xDaysAgoDate);

//sample query params
const opts = {
	publishedAfter: xDaysAgoRfc,
  maxResults: 6,
  key: 'AIzaSyDZ4lWg5nBC6TvLtD2Np3uMw2ymVVGzHy0'
};

// React class constructor
class Research extends Component {
  state = {

    results: [],
    make: "",
    model: "",
    year: ""
  }

  componentDidMount() {
    // console.log(opts);
    this.loadHotReviews(opts)
    // loadHotReviews(opts);
  }

  loadHotReviews = optsObj => {
  	console.log('loading hot reviews')
    API.loadHotReviews(optsObj)
      .then(res => {
        // console.log(res.data.items);
        this.setState({
        	  results: res.data.items
        }, function () {
            console.log(this.state.results);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadResearch())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Hot Reviews!</h1>
            </Jumbotron>
            {/*<YoutubeSearch />*/}
            <ResultList results={this.state.results} />
          </Col>

          {/*<Col size="md-6 sm-12">
            <div className="panel-list">
              {this.state.video.map((item, i) =>{
                return(
                  <h1>{item.items}</h1>

                )
              })}
            </div>
          </Col>*/}
        </Row>
      </Container>
    )
  }
}

export default Research;
