import React from 'react';
import {shallow} from 'enzyme';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../Header';

const createComponent = () => {
    return (<Header/>);
};

describe('render', () => {
    test('Header renders all elements', () => {
        const component = shallow(createComponent());
        expect(component.find('.App-header').length).toBe(1);
        expect(component.find('.logo-alignment').length).toBe(1);
        expect(component.find(Grid).getElements().length).toBe(1);
        expect(component.find(Row).getElements().length).toBe(1);
        expect(component.find(Col).getElements().length).toBe(5);//since 5 cols
        expect(component.find('a').getElements().length).toBe(5);//since 5 links
        expect(component.find('a').at(0).props().href).toBe("#home");//since 5 links
        expect(component.find('a').at(1).props().href).toBe("#home");//since 5 links
        expect(component.find('a').at(2).props().href).toBe("#howtouse");//since 5 links
        expect(component.find('a').at(3).props().href).toBe("#ourstory");//since 5 links
        expect(component.find('a').at(4).props().href).toBe("#whoweare");//since 5 links
    });


});
