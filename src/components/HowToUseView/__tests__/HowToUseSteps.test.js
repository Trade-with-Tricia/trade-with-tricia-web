import React from 'react';
import {shallow} from 'enzyme';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

import HowToUseSteps from "../HowToUseSteps";

const createComponent = () => {
    return (<HowToUseSteps/>);
};

describe('render', () => {
    test('HowToUseSteps renders all elements', () => {
        const component = shallow(createComponent());
        expect(component.find(Tab.Container).getElements().length).toBe(1);
        expect(component.find(Row).getElements().length).toBe(1);
        expect(component.find(Col).getElements().length).toBe(2);
        expect(component.find(Nav).getElements().length).toBe(1);
        expect(component.find(Nav).props().bsStyle).toBe("pills");
        expect(component.find(Nav).props().stacked).toBe(true);
        expect(component.find(NavItem).getElements().length).toBe(4);
        expect(component.find(NavItem).at(0).props().eventKey).toBe("first");
        expect(component.find(NavItem).at(0).children().text()).toBe("Get Started");
        expect(component.find(NavItem).at(1).props().eventKey).toBe("second");
        expect(component.find(NavItem).at(1).children().text()).toBe("Buy");
        expect(component.find(NavItem).at(2).props().eventKey).toBe("third");
        expect(component.find(NavItem).at(2).children().text()).toBe("Sell");
        expect(component.find(NavItem).at(3).props().eventKey).toBe("fourth");
        expect(component.find(NavItem).at(3).children().text()).toBe("Trade");

        expect(component.find(Tab.Content).getElements().length).toBe(1);
        expect(component.find(Tab.Pane).getElements().length).toBe(4);
        expect(component.find(Tab.Pane).at(0).props().eventKey).toBe("first");
        expect(component.find(Tab.Pane).at(0).children().find('p').getElements().length).toBe(2);//since 2 p tags
        expect(component.find(Tab.Pane).at(1).props().eventKey).toBe("second");
        expect(component.find(Tab.Pane).at(1).children().find('p').getElements().length).toBe(3);
        expect(component.find(Tab.Pane).at(1).children().find('ul').getElements().length).toBe(1);
        expect(component.find(Tab.Pane).at(1).children().find('li').getElements().length).toBe(4);
        expect(component.find(Tab.Pane).at(2).props().eventKey).toBe("third");
        expect(component.find(Tab.Pane).at(2).children().find('p').getElements().length).toBe(3);
        expect(component.find(Tab.Pane).at(2).children().find('ul').getElements().length).toBe(1);
        expect(component.find(Tab.Pane).at(2).children().find('li').getElements().length).toBe(4);
        expect(component.find(Tab.Pane).at(3).props().eventKey).toBe("fourth");
        expect(component.find(Tab.Pane).at(3).children().find('p').getElements().length).toBe(3);
        expect(component.find(Tab.Pane).at(3).children().find('ul').getElements().length).toBe(1);
        expect(component.find(Tab.Pane).at(3).children().find('li').getElements().length).toBe(4);

    });
});