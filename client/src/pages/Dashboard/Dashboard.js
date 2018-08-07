import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown, DropOption, FormDrop, DropType } from "../../components/Form";
import { BtnLrg}  from "../../components/Buttons";
import {Donut} from "../../components/Graph";
import {Bar} from 'react-chartjs-2';
// import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';


const barChart1 = {
  labels: ['vehicle 1', 'vehicle 2'],
  datasets: [
    {
      label: 'vehicle data',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0,0]
    }
  ]
};

const dataDoNut = {
  labels: [
    'mpg 1',
    'mpg 2',
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

class Dash extends Component {

  constructor(props) {
    super(props);
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  state = {
    auto1: [],
    auto2: [],
    class1: "vehicle class",
    class2: "vehicle class",
    train1: "drivetrain",
    train2: "drivetrain",
    title1: "Vehicle 1",
    title2: "Vehicle 2",
    car1: "",
    car2: "",
    trans1: "transmission",
    trans2: "transmission",
    cityMpgDonut: dataDoNut,
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
        this.setState({ auto1: res.data, make_and_model: "", vehicle_class: "", vehicle_drivetrain: "", trany: "", 
        cylinders: "", city_mpg: "", highway_mpg: "", fuel_cost: "", greenhouse_gas_score: "", })
      )
      .catch(err => console.log(err));
  };
  loadAuto2 = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto2: res.data, make_and_model: "", vehicle_class: "", vehicle_drivetrain: "", trany: "", 
        cylinders: "", city_mpg: "", highway_mpg: "", fuel_cost: "", greenhouse_gas_score: "", })
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
    const secondData = this.state.second
    
    console.log("test")
    console.log(this.state.auto1)
    console.log(this.state.auto2)
    
    const arrAuto1 = this.state.auto1;
    const arrAuto2 = this.state.auto2;
    console.log("test---find---")
    console.log(arrAuto1)
    console.log("test---findInArr---")
    
    const findInObj1 = (inObj1) =>{
      return inObj1._id === firstData;
    }
    const findInObj2 = (inObj2) =>{
      return inObj2._id === secondData;
    }
    
    console.log("test---find Object---")
    console.log(arrAuto1.find(findInObj1))
    const firstFoundObj = arrAuto1.find(findInObj1);
    const secondFoundObj = arrAuto2.find(findInObj2);
    
    var mm1 = firstFoundObj.make_and_model
    var vc1 = firstFoundObj.vehicle_class
    var vd1 = firstFoundObj.vehicle_drivetrain
    var vt1 = firstFoundObj.trany
    var num1cyl = firstFoundObj.cylinders
    var num1cmpg = firstFoundObj.city_mpg

    var mm2 = secondFoundObj.make_and_model
    var vc2 = secondFoundObj.vehicle_class
    var vd2 = secondFoundObj.vehicle_drivetrain
    var vt2 = secondFoundObj.trany
    var num2cyl = secondFoundObj.cylinders
    var num2cmpg = secondFoundObj.city_mpg

    var old_BarCyl = this.state.chart1Data.datasets[0];
    console.log(old_BarCyl)
    var newBarCylData = [];
    newBarCylData.push(num1cyl,num2cyl)
    var newBarCylDataSet = {
      ...old_BarCyl
    };
    newBarCylDataSet.data = newBarCylData;
    var newState_BarCyl = {
      ...barChart1,
      datasets: [newBarCylDataSet]
    };
        
    var old_DonutCityMpg = this.state.cityMpgDonut.datasets[0];
    var old_DonutCitylabels = this.state.cityMpgDonut;
    
    console.log("old labels object----------")
    console.log(old_DonutCitylabels)
    
    var new_DonutCityMpgData = [];
    var newLabels = [];

    new_DonutCityMpgData.push(num1cmpg,num2cmpg)
    var new_DonutCityMpgDataSet = {
      ...old_DonutCityMpg
    };

    newLabels.push(mm1,mm2)
    var new_LabelDataSet = {
      ...old_DonutCitylabels,
    };

    var newshit = new_LabelDataSet.labels.slice(0);
    console.log("slice----------")
    newshit = [];
    console.log(newshit)

    new_LabelDataSet.labels = newLabels;
    console.log("new dataset----------")
    console.log(new_LabelDataSet)
    console.log("new labels dataset.labels----------")
    console.log(new_LabelDataSet.labels)

    new_DonutCityMpgDataSet.data = new_DonutCityMpgData;
    
    var newState_DonutCityMpg = {
      ...dataDoNut,
      datasets: [new_DonutCityMpgDataSet],
      labels: [mm1,mm2]
    };
    
    
    // var newState_LabelsDonut = {
    //   ...dataDoNut,
    // };
    console.log(newState_DonutCityMpg)

    
    this.setState({
      title1: mm1,
      class1: vc1,
      train1: vd1,
      trans1: vt1,
      title2: mm2,
      class2: vc2,
      train2: vd2,
      trans2: vt2,
      chart1Data: newState_BarCyl,
      cityMpgDonut: newState_DonutCityMpg
    
    
    })
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
                  {auto1.make_and_model}
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
                  {auto2.make_and_model}
                </DropOption>
                ))}
              </Dropdown>
          </Col>
        </Row>
            </form>
        <Row>
          <Col size="md-4">
          <Card>
            <CardHeader>{this.state.title1}</CardHeader>
            <CardBody>
              <CardTitle>{this.state.class1}</CardTitle>
              <CardText>{this.state.train1}</CardText>
            </CardBody>
            <CardFooter>{this.state.trans1}</CardFooter>
          </Card>
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
          />
          </div>
          <br/>
          <div>
            <Donut data={this.state.cityMpgDonut} />
          </div>
          </Col>
          <Col size="md-4">
          <Card>
            <CardHeader>{this.state.title2}</CardHeader>
            <CardBody>
              <CardTitle>{this.state.class2}</CardTitle>
              <CardText>{this.state.train2}</CardText>
            </CardBody>
            <CardFooter>{this.state.trans2}</CardFooter>
          </Card>
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
