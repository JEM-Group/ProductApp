import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container, Form, Input } from 'reactstrap';
import ResultList from "../../components/ResultList"
import API from "../../utils/API";
import dateToRfc3339 from "../../utils/dateToRfc3339";
import "./Research.css";
// import { Link } from "react-router-dom";

//require youtube-search package
// const search = require('youtube-search');

function parseRfc3339date(days) {
	// const days = days;
	const date = new Date();
	const xDaysAgo = date.setTime(date.getTime() - (days * 24 * 60 * 60 * 1000));
	const xDaysAgoDate = new Date(xDaysAgo);
	const xDaysAgoRfc = dateToRfc3339.dateToRfc3339(xDaysAgoDate);
	return xDaysAgoRfc;
}

// Youtube API key
const API_key = "AIzaSyDZ4lWg5nBC6TvLtD2Np3uMw2ymVVGzHy0";

// Youtube query params
let params = {
  part: 'snippet',
  q: 'new car review|new automobile review -india',
  type: 'video',
  publishedAfter: '',
  key: API_key,
  order: 'relevance',
  // order: 'rating',
  regionCode: 'US',
  relevanceLanguage: 'en',
  topicId: '/m/07yv9',
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

    let publishedAfterRfcDate = parseRfc3339date(30)
    params.publishedAfter = publishedAfterRfcDate

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
  }

  handleChange(event) {
  	const target = event.target;
    const value = target.value;
  	const name = target.name;
  	this.setState({
  	  [name]: value
  	});
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    let make = this.state.make
  	let model = this.state.model
		let year = this.state.year

		// Updating q query param to match state

		// let keywords = [(year + " " +  make + " " + model + ' car review'), (year + " " +  make + " " + model + ' automobile review')]
		// let newKeyword = keywords.join(' | ');
		let newKeyword = (year + ' ' +  make + ' ' + model + ' review')
		console.log(newKeyword)
		params.q = newKeyword
		console.log(params.q)

    // Updating publishedAfter query param to match state
    let currentYear = (new Date()).getFullYear()
    console.log(currentYear)

    // Setting publishedAfter date as one year prior to user inputted year to account for cars that get released prior to their 'model year'
    let publishedAfterDaysAgo = 365*(currentYear - year - 1)
    console.log(publishedAfterDaysAgo)
		let publishedAfterRfcDate = parseRfc3339date(publishedAfterDaysAgo)
		params.publishedAfter = publishedAfterRfcDate
		console.log(params.publishedAfter)

    // Make API call based on user input i.e. new state
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
    queryURL += "&key=" + params.key;

    // grab text the user typed into the search input, add as parameter to url (use initial params for componentDidMount)
    let q = params.q;
    let escapedQ = encodeURIComponent(q)
    queryURL += "&q=" + escapedQ;

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

    console.log('params obj', params)
    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    return queryURL;
  }

  render() {
    return (
      <Container className="research" fluid>
        <Row>
          <Col lg={{ size: 6, offset: 3 }} md={{size: 6, offset: 3}} sm={12} xs={12}>
            <Jumbotron>
              <h1>Search Reviews!</h1>
            </Jumbotron>
        		<Form>
        		  <div className="form-group">
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
	              <select className="year-select" name="year" value={this.state.year} onChange={this.handleChange}>
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
	              <div className="form-group ">
                  <div className="col-12 col-centered">
	                  <Button
		                className="btn btn-warning btn-lg"
		                disabled={!(this.state.make || this.state.model || this.state.year)}
		                onClick={this.handleSubmit}
			              >
			                Get reviews
			              </Button>
			            </div>
				        </div>
	            </div>
            </Form>

            <ResultList results={this.state.results} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Research;
