import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HeaderLogo from '../media/TradeWithTriciaHeaderLogo.png';


class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <Grid>
                    <Row>
                        <Col xs={2} className="logo-alignment">
                            <a href="#home">
                                <img className="App-logo" src={HeaderLogo} height="70"/>
                            </a>
                        </Col>
                        <Col xsOffset={2} xs={2}>
                            <a href="#home">What Is TWT</a>
                        </Col>
                        <Col xs={2}>
                            <a href="#howtouse">How To Use</a>
                        </Col>
                        <Col xs={2}>
                            <a href="#ourstory">Our Story</a>
                        </Col>
                        <Col xs={2}>
                            <a href="#whoweare">Who We Are</a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

export default Header;