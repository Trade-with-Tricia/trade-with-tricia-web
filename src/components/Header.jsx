import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <Grid>
                    <Row>
                        <Col xsOffset={1} xs={2} className="logo-alignment">
                            <a href="#home">Trade With Tricia</a>
                        </Col>
                        <Col xsOffset={1} xs={2}>
                            <a href="#home">What Is TwT?</a>
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