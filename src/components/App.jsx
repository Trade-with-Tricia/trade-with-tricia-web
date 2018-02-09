import React, { Component } from 'react';
import logo from '../media/logo.svg';
import mainLogo from '../media/tradeWithTriciaMainLogo.png';
import smallLogo from '../media/tradeWithTriciaSmallLogo.png';
import '../style/App.css';
import ContactInfoForm from './ContactInfoForm';
import AboutPanel from './AboutPanel';
import { PageHeader, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <PageHeader>
            Trade With Tricia <small>UP's new cheap textbook solution</small>
        </PageHeader>
        */}
        <div className="App-header">
          <Grid>
            <Row>
              <Col xs={1}></Col>
              <Col xs={1}><Image style={{ height: '50px', width: '50px', marginTop: '10px' }} src={smallLogo} responsive /></Col>
              <Col xs={2} style={{ color: 'white', marginTop: '20px', marginLeft: '-35px', fontSize: '20px' }}>Trade with Tricia</Col>
            </Row>
          </Grid>
        </div>
        <div className="App-body">
          <Grid>
            <Row>
              <Col xs={3} className="main-logo-style"><Image src={mainLogo} responsive /></Col>
              <Col xs={6} style={{ paddingTop: '25px' }}><AboutPanel/></Col>
              <Col xs={3}></Col>
            </Row>
            <Row>
              <Col xs={3}></Col>
              <Col xs={6} style={{ paddingTop: '25px' }}><ContactInfoForm/></Col>
              <Col xs={3}></Col>
            </Row>
            <Row>
              <Col xs={2} xsOffset={5}>
                <Button bsStyle="primary" style={{ marginLeft: '40px'}}>
                  Submit
                </Button>
              </Col>
              <Col xs={5}></Col>
            </Row>
          </Grid>
        </div>
      </div>

    );
  }
}

export default App;
