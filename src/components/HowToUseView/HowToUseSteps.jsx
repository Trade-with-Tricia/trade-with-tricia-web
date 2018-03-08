import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

class HowToUseSteps extends Component {
  render() {
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix">
                    <Col sm={4}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem id="firstTab" eventKey="first">Get Started</NavItem>
                            <NavItem id="secondTab" eventKey="second">Buy</NavItem>
                            <NavItem id="thirdTab" eventKey="third">Sell</NavItem>
                            <NavItem id="fourthTab" eventKey="fourth">Trade</NavItem>
                        </Nav>
                    </Col>
                    <Col sm={8} className="steps-content-styling">
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                                <p className="tricia-number-style">
                                    Text Tricia at XXX-XXX-XXXX
                                    <p className="disclaimer-note">(currently under development, stay tuned!)</p>
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>If you're looking to buy a book, Tricia can find other students who are selling that book</p>
                                <p>Here are some example phrases you could text:</p>
                                <ul>
                                    <li className="list-elem-line-space">"Hey Tricia I'm looking to buy a book"</li>
                                    <li className="list-elem-line-space">"Hey Tricia I would like to buy a book with ISBN 123456789"</li>
                                    <li className="list-elem-line-space">"I'm trying to purchase a book"</li>
                                    <li className="list-elem-line-space">"I'm looking for a book"</li>
                                </ul>
                                <p className="disclaimer-note">Note: If you are a first time user, you will be prompted to agree with our T&C</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>If you're trying to sell a book, Tricia can store your book and notify you if anyone would like to buy it</p>
                                <p>Here are some example phrases you could text:</p>
                                <ul>
                                    <li className="list-elem-line-space">"Hey Tricia I would like to sell a book"</li>
                                    <li className="list-elem-line-space">"Hey Tricia I would like to sell a book with ISBN 123456789"</li>
                                    <li className="list-elem-line-space">"I'm trying to unload a book"</li>
                                    <li className="list-elem-line-space">"I'm looking to sell a book"</li>
                                </ul>
                                <p className="first-time-user-note">Note: If you are a first time user, you will be prompted to agree with our T&C</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <p>If you'd like to trade your book, Tricia can store your book and notify you if anyone would like to trade or buy it</p>
                                <p>Here are some example phrases you could text:</p>
                                <ul>
                                    <li className="list-elem-line-space">"Hey Tricia I would like to trade a book"</li>
                                    <li className="list-elem-line-space">"I would like to trade a book with ISBN 123456789"</li>
                                    <li className="list-elem-line-space">"I'm trying to trade a book"</li>
                                    <li className="list-elem-line-space">"I'm looking to exchange a book"</li>
                                </ul>
                                <p className="first-time-user-note">Note: If you are a first time user, you will be prompted to agree with our T&C</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
  }

}

export default HowToUseSteps;