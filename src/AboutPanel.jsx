import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class AboutPanel extends Component {
  render() {
    return (
        <Panel header="About Trade with Tricia">
            Trade with Tricia is a service where students can buy, sell, and trade textbooks. There are mobile apps in existence that promise similar functionality, but such services clutter phones with apps that see very infrequent use. Unlike competitors, Tricia requires nothing of clients beyond simple text-messaging. Users simply text Tricia the ISBN of a book and whether they are looking to buy, sell, or trade. She can then find matches and exchange their contact information with one another.
            Tricia is an intelligent chatbot capable of receiving commands in many different formats, so users will not experience any learning curve. Trade with Tricia aims to replace the need to unload or acquire textbooks in Facebook groups, all without forcing users to download anything.
        </Panel>
    );
  }

}

export default AboutPanel;