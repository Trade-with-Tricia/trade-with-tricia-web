import React, { Component } from 'react';
import HowToUseSteps from './HowToUseSteps';
import SellScreenshot from '../../media/SellProcessScreenshot.jpg';
import DemoVid from '../../media/Sprint3Demo.mov';

class View2 extends Component {
    render() {
        return (
            <div id="howtouse" className="view view2">
                <div className="view2-title">
                    <h2 className="view-title-color">How To Use</h2>
                </div>
                <div className="how-to-use-steps">
                    <HowToUseSteps/>
                </div>
                <div className="how-to-use-movie">
                    <p>Don't feel like reading? Watch this demo video</p>
                    <video controls="controls" width="550" height="400"
                           name="TWT Tutorial" src={DemoVid}></video>
                </div>
            </div>
        );
    }
}

export default View2;