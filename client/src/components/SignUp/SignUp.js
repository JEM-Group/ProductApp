import React, { Component } from "react";
import { Button, Form, Input } from 'reactstrap';
import axios from 'axios';
// import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    	email: '',
    	password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleChange(event) {
  	const target = event.target;
    const value = target.value;
  	const name = target.name;
  	console.log(event.target .value)
  	this.setState({
  	  [name]: value
  	}, function () {
        console.log(this.state.username);
        console.log(this.state.password);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    	console.log('sign-up-form, email: ');
    	console.log(this.state.email);
    	//request to server here
      axios.post('/', {
      	email: this.state.email,
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
  render() {
    return (
			<div className="col-sm-6 col-sm-offset-3">
		    <Form action="/signup" method="post">
		      <div className="form-group">
		          <label htmlFor="email">Email:</label>
		          <Input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}>
		          </Input>
		      </div>
		      <div className="form-group">
		          <label htmlFor="password">Password</label>
		          <Input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}>
		          </Input>
		      </div>

		      <Button type="submit" className="btn btn-warning btn-lg">Signup</Button>
		    </Form>

		    <hr/>

		    <p>Already have an account? <a href="/login">Login</a></p>
		    <p>Or go <a href="/">home</a>.</p>
			</div>
		);
	}
}

export default SignUp;
