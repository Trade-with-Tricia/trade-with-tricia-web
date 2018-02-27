import React from 'react';
import {shallow} from 'enzyme';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../Header';
import HeaderLogo from '../../media/TradeWithTriciaHeaderLogo.png';

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
        expect(component.find('img').getElements().length).toBe(1);//img tag for logo
        expect(component.find('img').at(0).props().className).toBe("App-logo");
        expect(component.find('img').at(0).props().height).toBe("70");
        expect(component.find('img').at(0).props().src).toBe(HeaderLogo);
        expect(component.find('a').at(0).props().href).toBe("#home");
        expect(component.find('a').at(1).props().href).toBe("#home");
        expect(component.find('a').at(2).props().href).toBe("#howtouse");
        expect(component.find('a').at(3).props().href).toBe("#ourstory");
        expect(component.find('a').at(4).props().href).toBe("#whoweare");
    });


});
