import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container, Form, Input } from 'reactstrap';
import { Dropdown, DropOption } from "../../components/Form";
import Card from "../../components/Card";
import {BarChart, Donut} from "../../components/Graph";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Dashboard.css";

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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    // Data props
    this.dataDoNut = {
      labels: [
        'Red',
        'Black',
        'Yellow'
      ],
      datasets: [{
        data: this.state.myData,
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };
  }

  state = {
    auto1: [],
    auto2: [],
    make1: "",
    make2: "",
    model: "",
    model2: "",
    title1: "start",
    title2: "start",
    car1: "",
    car2: "",
    dataDoNut: {},
    myData: [300, 50, 100]
  };

  componentDidMount() {
    this.loadAuto1();
    this.loadAuto2();
  }

  loadAuto1 = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto1: res.data, make: "", model: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };
  loadAuto2 = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto2: res.data, make: "", model: "", synopsis: "" })
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
      [name]: value,
    });
    console.log("Change_-_-_-_-_-_")
    console.log(target)
    console.log("------")
    console.log(target.value)
    console.log(target.name)
    console.log("-----------------")
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
    console.log("SUBMIT----------------")
    console.log(this.state)
    console.log("----------------")
    console.log(this.state.first)
    console.log(this.state.second)

    const firstData = this.state.first
    
    console.log("test")
    console.log(this.state.auto1)
    console.log(this.state.auto2)
    
    const arrAuto1 = this.state.auto1;
    console.log("test---find---")
    console.log(arrAuto1)
    console.log("test---findInArr---")

    const findInObj = (inObj) =>{
      return inObj._id === firstData;
    }

    console.log(arrAuto1.find(findInObj))

    // const findInObj = (key, findData, firstData) => {
    //   console.log("findInObj___1")
    //   for (key in findData){
    //     console.log("findInObj___2")
    //     if (key == "_id"){
    //       if (findData[key] == firstData){
    //         var yessir = findData;
    //         console.log(findData)
    //         console.log(yessir)
    //       }

    //     }
    //   }

    // }
    // findInObj();

    if (this.state.first) {
      this.setState({title1: this.state.first })
    }
    if (this.state.second) {
      this.setState({title2: this.state.second })
    }
  }

  render() {
    // console.log(this.state.auto)
    return (
      <Container fluid>
        <Form>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Dropdown onChange={this.handleInputChange} name="first" >
                {this.state.auto1.map(auto1 => (
                <DropOption key={auto1._id} 
                value={auto1._id}
                >
                  {auto1.make}
                </DropOption>
                ))}
              </Dropdown>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
            <Button 
                onClick={this.handleSubmit}
                >
                  Compare
              </Button>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Dropdown onChange={this.handleInputChange} name="second"  >
                {this.state.auto2.map(auto2 => (
                <DropOption key={auto2._id} 
                value={auto2._id}
                >
                  {auto2.make}
                </DropOption>
                ))}
              </Dropdown>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card
            title={this.state.title1}
            cardtext={"RAM"}
            img={"http://via.placeholder.com/350x150"}
            />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
          <div>
          <BarChart
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: true
            }}
          />
          </div>
          <br/>
          <div>
            <Donut data={this.dataDoNut} />
          </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card
            title={this.state.title2}
            cardtext={"Silverado"}
            img={"http://via.placeholder.com/350x150"}
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
