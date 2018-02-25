import React from 'react';
import {shallow} from 'enzyme';
import Youtube from 'react-youtube';

import View1 from '../View1';

const createComponent = () => {
    return (<View1/>);
};

describe('render', () => {
    test('View1 renders all elements', () => {
        const component = shallow(createComponent());
        expect(component.find('#whatistwt').length).toBe(1);
        expect(component.find('.view').length).toBe(1);
        expect(component.find('.view1').length).toBe(1);
        expect(component.find(Youtube).getElements().length).toBe(1);
        expect(component.find(Youtube).props().videoId).toBe("NO7Xi9r1rJ0");
        expect(component.find(Youtube).props().className).toBe("video-alignment");
    });


});
