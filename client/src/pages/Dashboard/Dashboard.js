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
// import {BarChart, Donut} from "../../components/Graph";
import {Donut} from "../../components/Graph";
import {Bar} from 'react-chartjs-2';


const barChart1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};


class Dash extends Component {

  constructor(props) {
    super(props);
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.dataDoNut = {
      labels: [
        'Red',
        'Black',
        'Yellow'
      ],
      datasets: [{
        data: [5,5],
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
    // myData: [5,5],
    chart1Data: barChart1,


  };

  componentWillMount(){
    // this.setState({chart1Data: barChart1});
	};

  componentDidMount() {
    this.loadAuto1();
    this.loadAuto2();
  }

  loadAuto1 = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto1: res.data, make: "", model: "", synopsis: "", mpg: "", cost: "" })
      )
      .catch(err => console.log(err));
  };
  loadAuto2 = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto2: res.data, make: "", model: "", synopsis: "", mpg: "", cost: "" })
      )
      .catch(err => console.log(err));
  };

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
    
    console.log("test---find Object---")
    console.log(arrAuto1.find(findInObj))
    const firstFoundObj = arrAuto1.find(findInObj);
    console.log(firstFoundObj.cost)
    console.log("__________________________")

    var oldDataSet = this.state.chart1Data.datasets[0];
    console.log(oldDataSet)
    var newData = [2,4,8,16,32,64];
    var newDataSet = {
      ...oldDataSet
    };
    
    newDataSet.data = newData;
    
    var newState = {
      ...barChart1,
      datasets: [newDataSet]
    };
    
    this.setState({chart1Data: newState})
    console.log(newState)

    // render()
    // {
    //   return (
    //     <Bar data={this.data}/>
    //   )
    // }
    


    // if (this.state.first) {
    //   this.setState({title1: this.state.first })
    // }
    // if (this.state.second) {
    //   this.setState({title2: this.state.second })
    // }
  }



  render() {
    // console.log(this.state.auto)
    return (
      <Container fluid>
            <form>
        <Row>
          <Col size="md-4">
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
          <Col size="md-4">
          <BtnLrg 
              onClick={this.handleSubmit}
              >
                Compare
            </BtnLrg>
          </Col>
          <Col size="md-4">
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
            </form>
        <Row>
          <Col size="md-4">
            <Card
            title={this.state.title1}
            cardtext={"RAM"}
            img={"http://via.placeholder.com/350x150"}
        
            />
          </Col>
          <Col size="md-4">
          <div>
          <Bar
            data={this.state.chart1Data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: true
            }}
            redraw
          />
          </div>
          <br/>
          <div>
            <Donut data={this.dataDoNut} />
          </div>
          </Col>
          <Col size="md-4">
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
