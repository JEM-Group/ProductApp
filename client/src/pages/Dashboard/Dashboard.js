import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown } from "../../components/Form";
import { BtnLrg}  from "../../components/Buttons";
// import Auto from "../../auto.json";
import Card from "../../components/Card";


class Dash extends Component {
  state = {
    auto: [],
    make: "",
    model: "",
    title: "",

  };

  componentDidMount() {
    this.loadAuto();
  }

  loadAuto = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto: res.data, make: "", model: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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

  handleBtnSubmit = e => {
    // event.preventDefault();
    console.log("state");
    console.log(this.state);
    if (this.state) {
      // this.setState({make: image})
      window.confirm(this.state.Auto.make);

    }
  };

  handleClick = (e) => {
    // console.log('this is:', this);
    console.log('this is:', e);
  }



  render() {
    console.log(this.state.auto)
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {this.state.auto.map(auto => (
              <BtnLrg 
              key={auto._id}
              onClick={() => this.handleClick(auto.id)}
              >
                {auto.make}
              </BtnLrg>
            ))}

          </Col>
          <Col size="md-6 sm-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Card
            title={"Dodge"}
            cardtext={"RAM"}
            img={"https://blogmedia.dealerfire.com/wp-content/uploads/sites/275/2017/09/2018-Ford-F-150-Race-Red_o.jpg"}
        
            />
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            </form>
          </Col>
          <Col size="md-6">
            <Card
            title={"Chevy"}
            cardtext={"Silverado"}
            img={"https://cars.usnews.com/static/images/Auto/izmo/i51570139/2018_chevrolet_silverado_1500_angularfront.jpg"}
        
            />
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            {/* {this.state.Auto.length ? ( */}
              <List>
                {/* {this.state.Auto.map(Auto => (
                  <ListItem key={Auto.id}>
                    <Link to={"/dashboard/"}>
                      <strong>
                        {Auto.make} | {Auto.model}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))} */}
              </List>
            ) : (
              {/* <h3>No Results to Display</h3> */}
            )}

            {this.state.auto.map(auto => (
            <Dropdown
              key={auto._id}
              title={auto.make}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dash;
