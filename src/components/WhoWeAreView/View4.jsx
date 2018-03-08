import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import CharlesImage from '../../media/CharlesImage.JPG';
import MichaelImage from '../../media/MichaelImage.JPEG';
import ColeImage from '../../media/ColeImage.jpg';
import AvayaImage from '../../media/AvayaImage.jpeg';
import JaredImage from '../../media/JaredImage.jpeg';
import NateImage from '../../media/NateImage.jpeg';

class View4 extends Component {
    render() {
        return (

            <div id="whoweare" className="view view4">
                <div className="view4-title">
                    <span>
                        <h2 className="view-title-color">Who We Are</h2>
                        <p className="view4-subtitle">
                            We are students at the University of Portland dedicated to fighting overpriced textbooks
                        </p>
                    </span>
                </div>
                <div className="member-description">
                    <Image src={ColeImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        Cole Preece is the founder of Trade with Tricia and a Senior OTM major at the UP.
                        He functions as the client and business analyst to the development team. The idea of Trade with Tricia came
                        to Cole after analyzing current textbook solutions and the recent growth in the area of artificial
                        intelligence.
                    </p>
                </div>
                <div className="member-description">
                    <Image src={CharlesImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        Charles Rayner is a Senior CS major at UP and the team lead for the fifth and final sprint. Charles
                        has worked with the backend functionality of Tricia and several conversational features of our
                        intelligent book assistant.
                    </p>
                </div>
                <div className="member-description">
                    <Image src={NateImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        Nathan Camacho is a Senior CS major at UP and the team lead for the first sprint. Nathan has worked
                        mostly with the conversational features of Tricia and the development of this website.
                    </p>
                </div>
                <div className="member-description">
                    <Image src={AvayaImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        Avaya Bhattarai is a Senior CS major at UP and the team lead for the second sprint. Avaya has developed
                        several of the backend functionality of Tricia as well as some conversational features.
                    </p>
                </div>
                <div className="member-description">
                    <Image src={MichaelImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        Michael Larios-Grave is a Senior CS major at the university and the team lead for the fourth
                        sprint. Michael has contributed to much of the backend functionality of Tricia including the ability
                        to chat with Tricia via SMS.
                    </p>
                </div>
                <div className="member-description">
                    <Image src={JaredImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        Jared Madison is a Senior CS major at UP and the team lead for the third sprint. Jared has
                        focused on implementing backend functionality and interacting heavily with our databases.
                    </p>
                </div>
            </div>
        );
    }
}

export default View4;