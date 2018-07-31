import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown, DropOption, FormDrop, DropType } from "../../components/Form";
import { BtnLrg}  from "../../components/Buttons";
// import options from "../../auto.json";
import Card from "../../components/Card";


class Dash extends Component {

  constructor(props) {
    super(props);
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    auto: [],
    make: "",
    model: "",
    title: "start",
    car1: "",
    car2: "",

  };

  componentDidMount() {
    this.loadAuto();
    // this.loadAuto2();
  }

  loadAuto = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto: res.data, make: "", model: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };
  // loadAuto2 = () => {
  //   API.getDash()
  //     .then(res =>
  //       this.setState({ auto2: res.data, make: "", model: "", synopsis: "" },),
  //     )
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  //   console.log(event.target)
  //   console.log(this.state.value)
  // };


  handleInputChange(event) {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(target.value)
    console.log(target.name)
  }

  handleBtnSubmit = e => {
    // event.preventDefault();
    console.log("state");
    console.log(this.state);
    window.confirm(this.state.auto.make);
    if (this.state) {
      // this.setState({make: image})

    }
  };

  handleClick = (e) => {
    // console.log('this is:', this);
    console.log('this is:', e);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value)
    // this.handleSubmit(this.state.event.target.value);
  }

  handleSubmit(event) {
    // console.log(event)
    // alert('Your favorite flavor is: ' + this.state.value);
    // alert('Your favorite flavor is: ' + this.state.first + " | " + this.state.second);
    // alert('Your favorite flavor is');
    event.preventDefault();
    console.log(this.state.first)
    console.log(this.state.second)
    console.log(this.state.auto.make)
    if (this.state.first) {
      this.setState({title: this.state.auto.make })
    }
  }





  render() {
    // console.log(this.state.auto)
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <form>
              <Dropdown onChange={this.handleInputChange} name="first" >
                {this.state.auto.map(auto => (
                <DropOption key={auto._id} 
                value={auto.synopsis}
                >
                  {auto.make}
                </DropOption>
                ))}
              </Dropdown>
              <Dropdown onChange={this.handleInputChange} name="second"  >
                {this.state.auto.map(auto => (
                <DropOption key={auto._id} 
                value={auto.make}
                >
                  {auto.make}
                </DropOption>
                ))}
              </Dropdown>
          <BtnLrg 
              onClick={this.handleSubmit}
              >
                Compare
            </BtnLrg>
            </form>
          </Col>
          <Col size="md-4">
          </Col>
          <Col size="md-4">
            <div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Card
            title={this.state.title}
            cardtext={"RAM"}
            img={"https://blogmedia.dealerfire.com/wp-content/uploads/sites/275/2017/09/2018-Ford-F-150-Race-Red_o.jpg"}
        
            />
          </Col>
          <Col size="md-4">
          <TextArea/>
          </Col>
          <Col size="md-4">
            <Card
            title={"Chevy"}
            cardtext={"Silverado"}
            img={"https://cars.usnews.com/static/images/Auto/izmo/i51570139/2018_chevrolet_silverado_1500_angularfront.jpg"}
        
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          {/* <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Pick your favorite flavor:
                  <select value={this.state.car1} onChange={this.handleInputChange} name="first" >
                    <option value="1grapefruit">Grapefruit</option>
                    <option value="1lime">Lime</option>
                    <option value="1coconut">Coconut</option>
                    <option value="1mango">Mango</option>
                  </select>
                  <select value={this.state.car2} onChange={this.handleInputChange} name="second">
                    <option value="secfruit">Grapefruit</option>
                    <option value="2grime">Lime</option>
                    <option value="2nuts">Coconut</option>
                    <option value="2django">Mango</option>
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
          </div> */}
          </Col>
          <br/>
          <br/>
          <br/>
        </Row>
      </Container>
    );
  }
}

export default Dash;
