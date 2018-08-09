import React, { Component } from "react";
import { Jumbotron, Button, Form, Input, Col, Row, Container } from 'reactstrap';
import axios from 'axios';
import './SignUp.css';

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
			<Container fluid>
        <Row>
          <Col lg={{ size: 4, offset: 4 }} md={{size: 6, offset: 3}} sm={{size: 6, offset: 3}} xs={12}>
	          <Jumbotron>
	            <h1>Sign Up</h1>
	          </Jumbotron>
				    <Form action="/signup" method="post">
				      <div className="form-group">
				          <label htmlFor="email">Email:</label>
				          <Input type="text" className="form-control" name="email" placeholder="jemfinder@ea.com" value={this.state.email} onChange={this.handleChange}>
				          </Input>
				      </div>
				      <div className="form-group">
				          <label htmlFor="password">Password:</label>
				          <Input type="password" className="form-control" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}>
				          </Input>
				      </div>
              <div className="form-group ">
                  <div className="col-12 col-centered">
                    <Button type="submit" className="btn btn-warning btn-lg">Signup</Button>
                  </div>
              </div>
				    </Form>

				    <hr/>

				    <p>Already have an account? <a href="/login">Login</a></p>
				    <p>Or go <a href="/">home</a>.</p>
			    </Col>
			  </Row>
			</Container>
		);
	}
}

export default SignUp;
