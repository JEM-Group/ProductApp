import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import YoutubeSearch from "../../components/YoutubeSearch";
import ResultList from "../../components/ResultList"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

//require youtube-search package
var search = require('youtube-search');

//sample query params
const opts = {
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
            <YoutubeSearch />
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
