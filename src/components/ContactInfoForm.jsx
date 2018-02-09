import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class ContactInfoForm extends Component {
  constructor() {
    super();
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.state = {
      phoneNumber: '',
      email: '',
    };
  }

  getPhoneValidationState() {
    const length = this.state.phoneNumber.length;
    if (length > 9) return 'success';
    else if (length > 0) return 'error';
  }

  getEmailValidationState() {
    const length = this.state.email.length;
    if (length > 9) return 'success';
    else if (length > 0) return 'error';
  }

  handlePhoneChange(e) {
    this.setState({ phoneNumber: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
        <form>
          <FormGroup
              controlId="phoneNumber"
              validationState={this.getPhoneValidationState()}
          >
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl
                type="text"
                value={this.state.phoneNumber}
                placeholder="Enter phone number"
                onChange={this.handlePhoneChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Please enter at least 10 digits</HelpBlock>
          </FormGroup>
          <FormGroup
              controlId="email"
              validationState={this.getEmailValidationState()}
          >
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
                type="text"
                value={this.state.email}
                placeholder="Enter email address"
                onChange={this.handleEmailChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Please include @ symbol</HelpBlock>
          </FormGroup>
        </form>
    );
  }
}

export default ContactInfoForm;