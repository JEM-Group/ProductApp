import React, { Component } from "react";
import API from "../../utils/API";
import {Bar, Doughnut} from 'react-chartjs-2';
import { Card, Button, CardHeader, CardFooter, CardBody, CardSubtitle, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import Select from 'react-select';
import "./Dashboard.css";



const baseBarChart = {
  labels: ['vehicle 1', 'vehicle 2'],
  datasets: [
    {
      label: 'vehicle data',
      backgroundColor: ['rgba(255,99,132,0.2)','rgba(12, 36, 198, 0.64)'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0,0]
    }
  ],
};

const dataDoNut = {
  labels: [
    'Vehicle 1',
    'Vehicle 2',
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

const legendOpts = {
  display: true,
  position: 'top',
  fullWidth: true,
  reverse: false,
  labels: {
  fontColor: 'rgb(255, 255, 255)'
  }
};

class Dash extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange1 = this.handleInputChange1.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
  }

  state = {
    auto: [],
    class1: "vehicle class",
    class2: "vehicle class",
    train1: "drivetrain",
    train2: "drivetrain",
    make1: "Make 1",
    make2: "Make 2",
    model1: "Model 1",
    model2: "Model 2",
    trans1: "transmission",
    trans2: "transmission",
    cylinder_1: "#00",
    cylinder_2: "#00",
    cityMpgChart: baseBarChart,
    highwayMpgChart: baseBarChart,
    chart1Data: baseBarChart,
    selectedValues1: [],
    selectedValues2: [],
    legend: legendOpts,
  };

  componentDidMount() {
    this.loadAuto();
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
    const value = event.value;
    const name = event.name;
    this.setState({
      selectedValues1: event,
      [name]: value,
    });

  }
  handleInputChange2(event) {
    const value = event.value;
    const name = event.name;
    this.setState({
      selectedValues2: event,
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMIT-------allStates---------")
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
    var num1hwmpg = firstFoundObj.highway_mpg
    
    var mm2 = secondFoundObj.vehicle_make_model
    var mk2 = secondFoundObj.make
    var md2 = secondFoundObj.model
    var vc2 = secondFoundObj.vehicle_class
    var vd2 = secondFoundObj.vehicle_drivetrain
    var vt2 = secondFoundObj.trany
    var num2cyl = secondFoundObj.cylinders
    var num2cmpg = secondFoundObj.city_mpg
    var num2hwmpg = secondFoundObj.highway_mpg

    //CITY - bar setting
    var old_CityChart = this.state.cityMpgChart.datasets[0];
    console.log(old_CityChart)
    var newCityBarData = [];
    newCityBarData.push(num1cmpg,num2cmpg)
    var newCityBarDataSet = {
      ...old_CityChart
    };
    newCityBarDataSet.data = newCityBarData;
    var newState_CityBar = {
      ...baseBarChart,
      datasets: [newCityBarDataSet],
      labels: [
        mm1 + " | " + num1cmpg + " mpg" , 
        mm2 + " | " + num2cmpg + " mpg" 
      ]
    };

    //HIGHWAY - bar setting
    var old_highwayChart = this.state.highwayMpgChart.datasets[0];
    console.log(old_highwayChart)
    var newHighwayBarData = [];
    newHighwayBarData.push(num1cmpg,num2cmpg)
    var newHighwayBarDataSet = {
      ...old_highwayChart
    };
    newHighwayBarDataSet.data = newHighwayBarData;
    var newState_HighwayBar = {
      ...baseBarChart,
      datasets: [newHighwayBarDataSet],
      labels: [
        mm1 + " | " + num1hwmpg + " mpg" , 
        mm2 + " | " + num2hwmpg + " mpg" 
      ]
    };

    //cylinder setting
    var old_BarCyl = this.state.chart1Data.datasets[0];
    console.log(old_BarCyl)
    var newBarCylData = [];
    newBarCylData.push(num1cyl,num2cyl)
    var newBarCylDataSet = {
      ...old_BarCyl
    };
    newBarCylDataSet.data = newBarCylData;
    var newState_BarCyl = {
      ...baseBarChart,
      datasets: [newBarCylDataSet]
    };
        
    //CITY - set new state data
    // var old_DonutCityMpg = this.state.cityMpgChart.datasets[0];
    // var new_DonutCityMpgData = [];
    // new_DonutCityMpgData.push(num1cmpg,num2cmpg)
    // var new_DonutCityMpgDataSet = {
    //   ...old_DonutCityMpg
    // };
    // new_DonutCityMpgDataSet.data = new_DonutCityMpgData;
    // var newState_DonutCityMpg = {
    //   ...dataDoNut,
    //   datasets: [new_DonutCityMpgDataSet],
    //   labels: [mm1 + " \n" + num1cmpg, mm2 + " \n" + num2cmpg ]
    // };
    
    //HIGHWAY - set new state data
    var old_HighwayMpg = this.state.highwayMpgChart.datasets[0];

    //color setting
    console.log("old_HighwayMpg--------------")
    console.log(old_HighwayMpg.backgroundColor)


    var new_HighwayMpgDonutData = [];
    new_HighwayMpgDonutData.push(num1hwmpg,num2hwmpg)
    var new_HigwayMpgDataSet = {
      ...old_HighwayMpg
    };
    new_HigwayMpgDataSet.data = new_HighwayMpgDonutData;
    var newState_HighwayMpg = {
      ...dataDoNut,
      datasets: [new_HigwayMpgDataSet],
      labels: [mm1 + " \n" + num1hwmpg, mm2 + " \n" + num2hwmpg ]
    };
    
    
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
      cityMpgChart: newState_CityBar,
      highwayMpgChart: newState_HighwayBar,
      selectedValues1: [],
      selectedValues2: []
    
    })
  }

  render() {

    return (
      <Container fluid>
          <Row>
            <Col className="text-center">
            <h1 className="display-3">My Dashboard</h1>
            <p className="h5">Compare vehicles based on input costs and environmental ratings</p>
            <hr/>
            </Col>
          </Row>
          <br/>
        <Form>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
            <Select 
              options={this.state.auto.map(auto => { return { label: auto.vehicle_make_model, value: auto._id, name:"first" }; })} 
              onChange={this.handleInputChange1} 
              value={this.state.selectedValues1} 
            />
            </Col>
          <Col size="md-4" className="text-center"> 
          <Button 
            outline 
            color="secondary"
            onClick={this.handleSubmit}
          >
            Compare Vehicles
          </Button>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
            <Select 
              options={this.state.auto.map(auto => { return { label: auto.vehicle_make_model, value: auto._id, name:"second" }; })} 
              onChange={this.handleInputChange2} 
              value={this.state.selectedValues2} 
            />
            </Col>
          </Row>
        </Form>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
          <Card className="bg-primary text-center" >
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
          <Col lg={4} md={4} sm={12} xs={12}>
          <br/>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
          <Card className="bg-primary text-center">
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
        <br/>
        <Row>
          <Col md="2">
          <div>
            row - city
          </div>
          </Col>
          <Col md="8">
              <Card className="bg-dark">
             <h3>
                City
                <small className="text-muted"> Miles per Gallon</small>
              </h3>
              <Bar
                data={this.state.cityMpgChart}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(255, 255, 255)'
                    }},
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }}
              />
              </Card>
          </Col>
          <Col md="2">
          <div>
            test3
          </div>
          </Col>
        <br/>
        </Row>
        <br/>
        <Row>
          <Col md="2">
          <div>
            row - highway_mpg
          </div>
          </Col>
          <Col md="8">
            <div>
              <Card className="bg-dark">
             <h3>
                Highway
                <small className="text-muted"> Miles per Gallon</small>
              </h3>
              <Bar
                data={this.state.highwayMpgChart}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(255, 255, 255)'
                    }},
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }}
              />
              </Card>
            </div>
          </Col>
          <Col md="2">
          <div>
            test3
          </div>
          </Col>
        <br/>
        <br/>
        </Row>
        <br/>
        <Row>
          <Col md="2">
          <div>
            row last
            col left
          </div>
          </Col>
          <Col md="8">
          <Card className="bg-dark">
              <h3>
                Cylinders
                <small className="text-muted"> Comparison</small>
              </h3>
              <h1 className="display-1"> {this.state.cylinder_1} </h1>
            <Bar
              data={this.state.chart1Data}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                legend: {
                  display: true,
                  labels: {
                      fontColor: 'rgb(255, 255, 255)'
                  }}
              }}
            />
          </Card>
          </Col>
          <Col md="2">
          <div>
            col right
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
