import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Jumbotron, Button, Form, Input,  Col, Row, Container } from 'reactstrap';
import axios from 'axios';
import "./Login.css";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
              <Container fluid>
                <Row>
                  <Col lg={{ size: 4, offset: 4 }} md={{size: 6, offset: 3}} sm={{size: 6, offset: 3}} xs={12}>
                    <Jumbotron>
                      <h1>Log in</h1>
                    </Jumbotron>
                    <Form>
                        <div className="form-group">
                            <div className="col-8">
                                <label className="form-label" htmlFor="username">Email:</label>
                            </div>
                            <div className="col-12 col-centered">
                                <Input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="jemfinder@ea.com"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-8">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-12 col-centered">
                                <Input className="form-input"
                                    placeholder="password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-12 col-centered">
	                            <Button
	                                className="btn btn-warning btn-lg"
	                                onClick={this.handleSubmit}
	                                type="submit">Login</Button>
                            </div>
                        </div>
                    </Form>
                </Col>
              </Row>
            </Container>
            )
        }
    }
}

export default Login
