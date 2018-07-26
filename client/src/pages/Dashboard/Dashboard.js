import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { BtnLrg}  from "../../components/Buttons";

const imgContStyle = {
  height: '75%', 
  width: '75%', 
  textAlign: 'center',
  overflow: 'hidden',
  position: 'relative',
  bottom: '120px',
  left: '30px'
}

class Dash extends Component {
  state = {
    dash: [],
    make: "",
    model: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadDash();
  }

  loadDash = () => {
    API.getDash()
      .then(res =>
        this.setState({ dash: res.data, Make: "", Model: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteDash = id => {
    API.deleteDash(id)
      .then(res => this.loadDash())
      .catch(err => console.log(err));
  };

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
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  handleBtnSubmit = event => {
    event.preventDefault();
    window.confirm('Button Pressed')
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            </form>
            <BtnLrg
              onClick={this.handleBtnSubmit}
            >
              Test Button
            </BtnLrg>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              {/* <h1>Dashboard placeholder</h1> */}
              <div><img src={'http://www.goodcarbadcar.net/wp-content/uploads/2011/01/20142BChevrolet2BSilverado.png'} 
              style={imgContStyle} alt="boohoo" className="img-responsive"/><span>Hello {this.props.name}</span></div>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.dash.length ? (
              <List>
                {this.state.dash.map(dash => (
                  <ListItem key={dash._id}>
                    <Link to={"/dashboard/"+ dash._id}>
                      <strong>
                        {dash.make} by {dash.model}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(dash._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dash;
