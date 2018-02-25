import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

import Header from '../Header';
import View1 from '../View1/View1';
import View2 from '../View2/View2';
import View3 from '../View3/View3';
import View4 from '../View4/View4';

const createComponent = () => {
    return (<App/>);
};

describe('render', () => {
    test('App renders all components', () => {
        const component = shallow(createComponent());
        expect(component.find('#home').length).toBe(1);
        expect(component.find('.views').length).toBe(1);
        expect(component.contains(<Header/>)).toBe(true);
        expect(component.contains(<View1/>)).toBe(true);
        expect(component.contains(<View2/>)).toBe(true);
        expect(component.contains(<View3/>)).toBe(true);
        expect(component.contains(<View4/>)).toBe(true);
    });


});
