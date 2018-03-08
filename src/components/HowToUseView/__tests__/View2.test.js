import React from 'react';
import {shallow} from 'enzyme';


import View2 from '../View2';
import HowToUseSteps from "../HowToUseSteps";
import DemoVid from '../../../media/Sprint3Demo.mov';

const createComponent = () => {
    return (<View2/>);
};

describe('render', () => {
    test('View2 renders all elements', () => {
        const component = shallow(createComponent());
        expect(component.find('#howtouse').length).toBe(1);
        expect(component.find('.view').length).toBe(1);
        expect(component.find('.view2').length).toBe(1);
        expect(component.find('.view2-title').length).toBe(1);
        expect(component.find('.view-title-color').length).toBe(1);
        expect(component.find('.view-title-color').text()).toBe("How To Use");
        expect(component.find('.how-to-use-steps').length).toBe(1);
        expect(component.find('.how-to-use-movie').length).toBe(1);
        expect(component.find(HowToUseSteps).getElements().length).toBe(1);
        expect(component.find('p').text()).toBe("Don't feel like reading? Watch this demo video");
        expect(component.find('video').length).toBe(1);
        expect(component.find('video').props().controls).toBe("controls");
        expect(component.find('video').props().width).toBe("550");
        expect(component.find('video').props().height).toBe("400");
        expect(component.find('video').props().name).toBe("TWT Tutorial");
        expect(component.find('video').props().src).toBe(DemoVid);
    });


});
