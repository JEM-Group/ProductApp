import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./Navbar.css"

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        return (
            <div>
                <header className="navbar App-header" id="nav-container">
                    <div className="col-2 col-mr-auto">
                      <div id="top-filler"></div>
                      <a href="/"><img width="80" src="/images/jemlogo_transparent.png"/></a>
                    </div>
                    <div className="col-10" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span>home</span>
                                        </Link>
                                    <Link to="/research" className="btn btn-link text-secondary">
                                         <span>reviews</span>
                                         </Link>
                                    <Link to="/dashboard" className="btn btn-link text-secondary">
                                         <span>compare</span>
                                         </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                    <span>login</span>
        </Link>
                                    <Link to="/signup" className="btn btn-link text-secondary">
                                    <span>sign up</span>
        </Link>
                                </section>
                            )}
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar
