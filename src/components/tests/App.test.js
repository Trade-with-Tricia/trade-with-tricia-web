import React from 'react';
import {shallow} from 'enzyme';
import App from '../App.jsx';

describe('render', () => {
    test('App renders correctly', () => {
        const props = {};
        const component = shallow(<App />);
    });
});
