import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Books from "./pages/Books";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Dashboard from "./pages/Dashboard";
import Chart from "./pages/Chart";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import SignUp from "./components/SignUp";
import Login from './components/Login';
import Navbar from './components/Navbar';
import {MyNavbar} from "./components/MyNavbar";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            {/* greet user if logged in: */}
            {this.state.loggedIn &&
              <p>Join the party, {this.state.username}!</p>
            }
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/research" component={Research} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/books/:id" component={Detail} />
              <Route exact path="/chart" component={Chart} />
              <Route exact path="/dashboard/:id" component={Detail} />
              <Route
                path="/login"
                render={() =>
                  <Login
                    updateUser={this.updateUser}
                  />}
              />
              <Route
                path="/signup"
                render={() =>
                  <SignUp/>}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
