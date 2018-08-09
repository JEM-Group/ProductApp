import React, { Component } from "react";
import { Button, Form, Input } from 'reactstrap';
import axios from 'axios'
// import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	// value:"",
    	username: '',
    	password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    // let publishedAfterRfcDate = parseRfc3339date(30)
    // params.publishedAfter = publishedAfterRfcDate

    // let starterQuery = this.buildQueryURL(params)
    // API.loadReviews(starterQuery)
    //   .then(res => {
    //     // console.log(res.data.items);
    //     this.setState({
    //         results: res.data.items
    //     }, function () {
    //         console.log(this.state.results);
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  handleChange(event) {
  	const target = event.target;
    const value = target.value;
  	const name = target.name;
  	console.log(event.target.value)
  	this.setState({
  	  [name]: value
  	}, function () {
        console.log(this.state.username);
        console.log(this.state.password);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    	console.log('sign-up-form, username: ');
    	console.log(this.state.username);
    	//request to server here
      axios.post('/', {
      	username: this.state.username,
      	password: this.state.password
      })
        .then(response => {
        	console.log('response', response) 
        	if(response.data){
        		console.log('successful signup')
        		this.setState({
        			redirectTo: '/login'
        		})
        	} else {
        		console.log('Sign-up error');
        	}
        }).catch(error => {
        	console.log('Sign up server error: ')
        	console.log(error);
        })
  }
		// // Updating q query param to match state

		// // let keywords = [(year + " " +  make + " " + model + ' car review'), (year + " " +  make + " " + model + ' automobile review')]
		// // let newKeyword = keywords.join(' | ');
		// let newKeyword = (year + ' ' +  make + ' ' + model + ' review')
		// console.log(newKeyword)
		// params.q = newKeyword
		// console.log(params.q)

  //   // Updating publishedAfter query param to match state
  //   let currentYear = (new Date()).getFullYear()
  //   console.log(currentYear)

  //   // Setting publishedAfter date as one year prior to user inputted year to account for cars that get released prior to their 'model year'
  //   let publishedAfterDaysAgo = 365*(currentYear - year - 1)
  //   console.log(publishedAfterDaysAgo)
		// let publishedAfterRfcDate = parseRfc3339date(publishedAfterDaysAgo)
		// params.publishedAfter = publishedAfterRfcDate
		// console.log(params.publishedAfter)

  //   // Make API call based on user input i.e. new state
		// let query = this.buildQueryURL(params)
		// API.loadReviews(query)
		//   .then(res => {
		//     // console.log(res.data.items);
		//     this.setState({
		//     	  results: res.data.items
		//     }, function () {
		//         console.log(this.state.results);
		//     });
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		//   });

  

  render() {
    return (
			<div class="col-sm-6 col-sm-offset-3">
		    <Form action="/signup" method="post">
		      <div class="form-group">
		          <label htmlFor="username">Username:</label>
		          <Input type="text" class="form-control" name="username" value={this.state.username} onChange={this.handleChange}>
		          </Input>
		      </div>
		      <div class="form-group">
		          <label htmlFor="password">Password</label>
		          <Input type="password" class="form-control" name="password" value={this.state.username} onChange={this.handleChange}>
		          </Input>
		      </div>

		      <Button type="submit" class="btn btn-warning btn-lg">Signup</Button>
		    </Form>

		    <hr/>

		    <p>Already have an account? <a href="/login">Login</a></p>
		    <p>Or go <a href="/">home</a>.</p>
			</div>
		);
	}
}

export default SignUp;
