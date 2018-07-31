import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown } from "../../components/Form";
import { BtnLrg}  from "../../components/Buttons";
import Stuff from "../../auto.json";
import Card from "../../components/Card";
import BarChart from "../../components/Bar";


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class Dash extends Component {
  state = {
    Stuff,
    make: "",
    model: "",
    title: "",
    data: [65, 59, 80, 81, 56, 55, 40],

  };

  // componentDidMount() {
  //   this.loadStuff();
  // }

  // loadStuff = () => {
  //   API.getDash()
  //     .then(res =>
  //       this.setState({ Stuff: res.data, make: "", model: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

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
      window.confirm(this.state.Stuff.make);

    }
  };

  handleClick = (e) => {
    // console.log('this is:', this);
    console.log('this is:', e);
  }



  render() {
    console.log(this.state.Stuff)
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {this.state.Stuff.map(Stuff => (
              <BtnLrg 
              key={Stuff._id}
              onClick={() => this.handleClick(Stuff.id)}
              >
                {Stuff.make}
              </BtnLrg>
            ))}
          </Col>
          <Col size="md-6 sm-12">
          <BarChart
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: true
            }}
          />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Card
            title={"Dodge"}
            cardtext={"RAM"}
            img={"http://via.placeholder.com/350x150"}
            />
          </Col>
          <Col size="md-6">
            <Card
            title={"Chevy"}
            cardtext={"Silverado"}
            img={"http://via.placeholder.com/350x150"}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            placeholder
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dash;
