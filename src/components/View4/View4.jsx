import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import CharlesImage from '../../media/CharlesImage.JPG';
import MichaelImage from '../../media/MichaelImage.JPEG';
import ColeImage from '../../media/ColeImage.jpg';
import AvayaImage from '../../media/AvayaImage.jpeg';
import JaredImage from '../../media/JaredImage.jpeg';
import testImage from '../../media/tradeWithTriciaSmallLogo.png'

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
                        hebwf ewubwiej cewj euoncwei ewvnw eivjnevinwev injvwineijvkn
                    </p>
                </div>
                <div className="member-description">
                    <Image src={CharlesImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        hebwf ewubwiej cewj euoncwei ewvnw eivjnevinwev injvwineijvkn
                    </p>
                </div>
                <div className="member-description">
                    <Image src={testImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        hebwf ewubwiej cewj euoncwei ewvnw eivjnevinwev injvwineijvkn
                    </p>
                </div>
                <div className="member-description">
                    <Image src={AvayaImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        hebwf ewubwiej cewj euoncwei ewvnw eivjnevinwev injvwineijvkn
                    </p>
                </div>
                <div className="member-description">
                    <Image src={MichaelImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        hebwf ewubwiej cewj euoncwei ewvnw eivjnevinwev injvwineijvkn
                    </p>
                </div>
                <div className="member-description">
                    <Image src={JaredImage} className="member-photo-style" rounded/>
                    <p className="member-paragraph">
                        hebwf ewubwiej cewj euoncwei ewvnw eivjnevinwev injvwineijvkn
                    </p>
                </div>
            </div>
        );
    }
}

export default View4;