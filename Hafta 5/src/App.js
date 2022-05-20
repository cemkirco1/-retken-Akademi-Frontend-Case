import Navi from './comp/Navi';
import Cal from './comp/Cel';
import Fah from './comp/Fah';
import Kel from './comp/Kel';
import Main from './comp/Main';
import './assets/style/navi.css';
import React, {Component} from 'react';
import {Button, Row, Col} from 'reactstrap'

export default class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        count: 0,
      };
      this.updateState = this.updateState.bind(this);
    }

      updateState(){
        this.setState((prevState) => {
          return { count: prevState.count + 1};
        });
      }
  render() {

    let data = {
      cel: "Celcius",
      fah: "Fahrenheit",
      kel: "Kelvin",
      
    };

    return (
      <div className="App">
      <div>
      <Navi />
      </div>
      <p>Lorem</p>
      <p>Lorem</p>
      <Row>
      <Button 
      onClick={this.updateState}
      color="primary" 
      size="">
        Sıcaklığı Arttır
        </Button>
        <Main data={data} sayac={this.state.count}/>
      </Row>
      <Row>
        <Col>
          <Cal data={data} sayac={this.state.count} />
        </Col>
        <Col>
          <Fah data={data} sayac={this.state.count} />
        </Col>
        <Col>
          <Kel data={data} sayac={this.state.count} />
        </Col>
      </Row>
    </div>
    )
  }
}
