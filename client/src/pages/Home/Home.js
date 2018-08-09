import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from 'reactstrap';
import API from "../../utils/API";
import "./Home.css";
// import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    results: [],
    username: "",
    password: ""
  };

  componentDidMount() {
    this.welcomeScreen();
  }

  welcomeScreen = () => {
    // API.getBooks()
    //   .then(res =>
    //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //   )
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={{ size: 4, offset: 4 }} md={{size: 6, offset: 3}} sm={12} xs={12}>
            <Jumbotron>
              <h1>JEM Finder</h1>
              <p>The world's most advanced</p>
              <p>automotive research app</p>
              <div className="col-8 col-centered">
	              <Button
	                tag="a"
	                color="warning"
	                size="large"
	                href="/research"
	                // target="_blank"
		            >
		              Search Reviews
		            </Button>
		          </div>
		          <div className="col-8 col-centered">
		            <Button
		              tag="a"
		              color="warning"
		              size="large"
		              href="compare"
		              // target="_blank"
		            >
		              Compare Cars
		            </Button>
		          </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
