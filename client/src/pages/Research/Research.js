import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import YoutubeSearch from "../../components/YoutubeSearch";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
var search = require('youtube-search');
const opts = {
  maxResults: 10,
  key: 'AIzaSyDZ4lWg5nBC6TvLtD2Np3uMw2ymVVGzHy0'
};

class Research extends Component {
  state = {
    video: [],
    make: "",
    model: "",
    year: ""
  }
  
  componentDidMount() {
    console.log(opts);
    // loadHotReviews(opts);
  }
  
  loadHotReviews = (optsObj) => {
    API.loadHotReviews(optsObj)
      .then((response) => {
        console.log(response);
        // this.setState({video: response.results})
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
