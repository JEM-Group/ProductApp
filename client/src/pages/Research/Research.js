import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container, Form, Input } from 'reactstrap';
import ResultList from "../../components/ResultList"
import API from "../../utils/API";
import dateToRfc3339 from "../../utils/dateToRfc3339";
import "./Research.css";
// import { Link } from "react-router-dom";

//require youtube-search package
// const search = require('youtube-search');

// Parsing date from one week ago
const days = 7;
const date = new Date();
const xDaysAgo = date.setTime(date.getTime() - (days * 24 * 60 * 60 * 1000));
const xDaysAgoDate = new Date(xDaysAgo);
const xDaysAgoRfc = dateToRfc3339.dateToRfc3339(xDaysAgoDate);

// Youtube API key
const API_key = "AIzaSyDZ4lWg5nBC6TvLtD2Np3uMw2ymVVGzHy0";

// Youtube query params
let params = {
  part: 'snippet',
  q: 'car review | new car review',
  type: 'video',
  publishedAfter: xDaysAgoRfc,
  key: API_key,
  order: 'viewCount',
  // Youtube proprietary topic parameter
  topicId: '/m/07yv9',
  relevanceLanguage: 'EN',
  videoEmbeddable: 'true',
  maxResults: 6
};

// React class constructor
class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	// value:"",
    	results: [],
    	make: "",
    	model: "",
    	year: "2018"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let starterQuery = this.buildQueryURL(params)
    API.loadReviews(starterQuery)
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
    // this.loadHotReviews(opts)
  }

  // loadHotReviews = optsObj => {
  //   console.log('loading hot reviews')
  //   API.loadHotReviews(optsObj)
  //     .then(res => {
  //       // console.log(res.data.items);
  //       this.setState({
  //           results: res.data.items
  //       }, function () {
  //           console.log(this.state.results);
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  handleChange(event) {
  	const target = event.target;
    const value = target.value;
  	const name = target.name;
  	this.setState({
  	  [name]: value
  	});

   // this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('make: ', this.state.make)
  	console.log('model: ', this.state.model)
		console.log('year: ', this.state.year)
		let query = this.buildQueryURL(params)
		API.loadReviews(query)
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

  buildQueryURL(params) {
    // queryURL is the url we'll use to query the API
    let queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet";

    // add the api key parameter (the one we received when we registered)
    console.log('params obj', params)
    console.log('params.key', params.key)
    queryURL += "&key=" + params.key;

    // grab text the user typed into the search input, add as parameter to url (use initial params for componentDidMount)
    let q = params.q;
    // let q = this.state.year + this.state.make + this.state.model
    queryURL += "&q=" + q;

    // add the type parameter
    queryURL += "&type=" + params.type;

    // add the publishedAfter parameter
    queryURL += "&publishedAfter=" + params.publishedAfter;

    // add the order parameter
    queryURL += "&order=" + params.order;

    // add the topicId parameter
    queryURL += "&topicId=" + params.topicId;

    // add the relevanceLanguage parameter
    queryURL += "&relevanceLanguage=" + params.relevanceLanguage;

    // add the videoEmbeddable parameter
    queryURL += "&videoEmbeddable=" + params.videoEmbeddable;

    // add the maxResults parameter
    queryURL += "&maxResults=" + params.maxResults;

    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    return queryURL;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={{ size: 8, offset: 2 }} md={{size: 8, offset: 2}} sm={12} xs={12}>
            <Jumbotron>
              <h1>Search Reviews!</h1>
            </Jumbotron>
        		<Form>
              <Input
                value={this.state.make}
                onChange={this.handleChange}
                name="make"
                placeholder="Make (required)"
              />
              <Input
                value={this.state.model}
                onChange={this.handleChange}
                name="model"
                placeholder="Model (required)"
              />
              <select name="year" value={this.state.year} onChange={this.handleChange}>
                  <option value="2018">2018</option>
        			    <option value="2017">2017</option>
        			    <option value="2016">2016</option>
        			    <option value="2015">2015</option>
        			    <option value="2014">2014</option>
        			    <option value="2013">2013</option>
        			    <option value="2012">2012</option>
        			    <option value="2011">2011</option>
        			    <option value="2010">2010</option>
        			    <option value="2009">2009</option>
        			    <option value="2008">2008</option>
        			    <option value="2007">2007</option>
        			    <option value="2006">2006</option>
        			    <option value="2005">2005</option>
        			    <option value="2004">2004</option>
        			    <option value="2003">2003</option>
        			    <option value="2002">2002</option>
        			    <option value="2001">2001</option>
        			    <option value="2000">2000</option>
        			    <option value="1999">1999</option>
        			    <option value="1998">1998</option>
        			    <option value="1997">1997</option>
        			    <option value="1996">1996</option>
        			    <option value="1995">1995</option>
        			    <option value="1994">1994</option>
        			    <option value="1993">1993</option>
        			    <option value="1992">1992</option>
        			    <option value="1991">1991</option>
        			    <option value="1990">1990</option>
        			    <option value="1989">1989</option>
        			    <option value="1988">1988</option>
        			    <option value="1987">1987</option>
        			    <option value="1986">1986</option>
        			    <option value="1985">1985</option>
        			    <option value="1984">1984</option>
        			    <option value="1983">1983</option>
        			    <option value="1982">1982</option>
        			    <option value="1981">1981</option>
        			    <option value="1980">1980</option>
        			    <option value="1979">1979</option>
        			</select>
              <Button
                disabled={!(this.state.make || this.state.model || this.state.year)}
                onClick={this.handleSubmit}
              >
                Get reviews
              </Button>
            </Form>

            <ResultList results={this.state.results} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Research;
