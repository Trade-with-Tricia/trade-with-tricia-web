import React from 'react';
import {shallow} from 'enzyme';


import View3 from '../View3';

const createComponent = () => {
    return (<View3/>);
};

describe('render', () => {
    test('View3 renders all elements', () => {
        const component = shallow(createComponent());
        expect(component.find('#ourstory').length).toBe(1);
        expect(component.find('.view').length).toBe(1);
        expect(component.find('.view3').length).toBe(1);
        expect(component.find('.view3-title').length).toBe(1);
        expect(component.find('.view3-title').text()).toBe("Our Story");
        expect(component.find('.view3-content').length).toBe(1);
        expect(component.find('p').length).toBe(3);
    });


});
