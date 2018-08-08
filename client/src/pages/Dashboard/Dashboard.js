import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { TextArea, FormBtn, Dropdown, DropOption, FormDrop, DropType } from "../../components/Form";
// import { BtnLrg}  from "../../components/Buttons";
// import {Donut} from "../../components/Graph";
import {Bar, Doughnut} from 'react-chartjs-2';
// import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody, CardSubtitle, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import Select from 'react-select';


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
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange1 = this.handleInputChange1.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
  }


  state = {
    auto: [],
    // auto2: [],
    class1: "vehicle class",
    class2: "vehicle class",
    train1: "drivetrain",
    train2: "drivetrain",
    make1: "Make 1",
    make2: "Make 2",
    model1: "Model 1",
    model2: "Model 2",
    car1: "",
    car2: "",
    trans1: "transmission",
    trans2: "transmission",
    cityMpgDonut: dataDoNut,
    chart1Data: barChart1,
    selectedValues1: [],
    selectedValues2: []

  };

  componentWillMount(){
    // this.setState({chart1Data: barChart1});
	};

  componentDidMount() {
    this.loadAuto();
    // this.loadAuto2();
  }

  loadAuto = () => {
    API.getDash()
      .then(res =>
        this.setState({ auto: res.data, vehicle_make_and_model: "", make: "", model: "", vehicle_class: "", vehicle_drivetrain: "", trany: "", 
        cylinders: "", city_mpg: "", highway_mpg: "", fuel_cost: "", greenhouse_gas_score: "", })
      )
      .catch(err => console.log(err));
  };

  handleInputChange1(event) {
    console.log("event")
    console.log(event)
    console.log(event.name)
    console.log(event.value)
    console.log("------")

    // const target = event;
    const value = event.value;
    const name = event.name;

    this.setState({
      selectedValues1: event,
      [name]: value,

    });
    console.log("Change_-_-_-_-_-_")
    // console.log(target)
    console.log("------")
    console.log("selectedValues")
    console.log(this.state.selectedValues1)
    console.log("-----------------")
  }
  handleInputChange2(event) {
    console.log("event")
    console.log(event)
    console.log(event.name)
    console.log(event.value)
    console.log("------")

    // const target = event;
    const value = event.value;
    const name = event.name;

    this.setState({
      selectedValues2: event,
      [name]: value,

    });
    console.log("Change_-_-_-_-_-_")
    // console.log(target)
    console.log("------")
    console.log("selectedValues")
    console.log(this.state.selectedValues2)
    console.log("-----------------")
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMIT----------------")
    console.log(this.state)
    console.log("----------------")

    if (this.state.first && this.state.second) {
      console.log(this.state.first)
      console.log(this.state.second)
    }
    else {
      alert("You must choose two vehicles");
      return;
    }
    
    const firstData = this.state.first
    const secondData = this.state.second

    console.log("test auto obj")
    console.log(this.state.auto)
    
    const arrAuto1 = this.state.auto;
    const arrAuto2 = this.state.auto;
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
    
    var mm1 = firstFoundObj.vehicle_make_model
    var mk1 = firstFoundObj.make
    var md1 = firstFoundObj.model
    var vc1 = firstFoundObj.vehicle_class
    var vd1 = firstFoundObj.vehicle_drivetrain
    var vt1 = firstFoundObj.trany
    var num1cyl = firstFoundObj.cylinders
    var num1cmpg = firstFoundObj.city_mpg

    var mm2 = secondFoundObj.vehicle_make_model
    var mk2 = secondFoundObj.make
    var md2 = secondFoundObj.model
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
      make1: mk1,
      model1: md1,
      make2: mk2,
      model2: md2,
      class1: vc1,
      train1: vd1,
      trans1: vt1,
      class2: vc2,
      train2: vd2,
      trans2: vt2,
      chart1Data: newState_BarCyl,
      cityMpgDonut: newState_DonutCityMpg,
      selectedValues1: [],
      selectedValues2: []
    
    })

  }



  render() {
    const { selectedOption } = this.state;
  

    return (
      <Container fluid>
            <form>
        <Row>
          <Col size="md-4">
          <br/>
            <Select 
              options={this.state.auto.map(auto => { return { label: auto.vehicle_make_model, value: auto._id, name:"first" }; })} 
              onChange={this.handleInputChange1} 
              value={this.state.selectedValues1} 
            />
          </Col>
          <Col size="md-4" className="text-center"> 
          <br/>
          <Button 
            outline 
            color="secondary"
            onClick={this.handleSubmit}
          >
              Compare
          </Button>
          </Col>
          <Col size="md-4">
          <br/>
            <Select 
              options={this.state.auto.map(auto => { return { label: auto.vehicle_make_model, value: auto._id, name:"second" }; })} 
              onChange={this.handleInputChange2} 
              value={this.state.selectedValues2} 
            />
          </Col>
        </Row>
            </form>
        <Row>
          <Col size="md-4">
          <Card>
            <CardHeader>{this.state.make1}</CardHeader>
            <CardBody>
              <CardTitle>{this.state.model1}</CardTitle>
              <CardSubtitle>{this.state.train1}</CardSubtitle>
              <CardText>
                  {this.state.trans1}
              </CardText>
            </CardBody>
            <CardFooter>{this.state.class1}</CardFooter>
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
            <Doughnut data={this.state.cityMpgDonut} />
          </div>
          </Col>
          <Col size="md-4">
          <Card>
            <CardHeader>{this.state.make2}</CardHeader>
            <CardBody>
              <CardTitle>{this.state.model2}</CardTitle>
              <CardSubtitle>{this.state.train2}</CardSubtitle>
              <CardText>
                  {this.state.trans2}
              </CardText>
            </CardBody>
            <CardFooter>{this.state.class2}</CardFooter>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <div>
          </div>
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
