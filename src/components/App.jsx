import React, { Component } from 'react';
import '../style/App.css';

import Header from './Header';
import View1 from './WhatIsTwTView/View1';
import View2 from './HowToUseView/View2';
import View3 from './OurStoryView/View3';
import View4 from './WhoWeAreView/View4';



class App extends Component {
  render() {
    return (
        <div id="home" className="top-level-div">
            <Header/>
            <div className="views">`
                <View1/>
                <View2/>
                <View3/>
                <View4/>
            </div>
        </div>

    );
  }
}

export default App;
