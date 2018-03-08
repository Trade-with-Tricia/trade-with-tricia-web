import React from 'react';
import {shallow} from 'enzyme';
import {Image} from 'react-bootstrap';
import CharlesImage from '../../../media/CharlesImage.JPG';
import MichaelImage from '../../../media/MichaelImage.JPEG';
import ColeImage from '../../../media/ColeImage.jpg';
import AvayaImage from '../../../media/AvayaImage.jpeg';
import JaredImage from '../../../media/JaredImage.jpeg';
import NateImage from '../../../media/NateImage.jpeg';


import View4 from '../View4';

const createComponent = () => {
    return (<View4/>);
};

describe('render', () => {
    test('View4 renders all elements', () => {
        const component = shallow(createComponent());
        expect(component.find('#whoweare').length).toBe(1);
        expect(component.find('.view').length).toBe(1);
        expect(component.find('.view4').length).toBe(1);
        expect(component.find('.view4-title').length).toBe(1);
        expect(component.find('.view-title-color').length).toBe(1);
        expect(component.find('.view-title-color').text()).toBe("Who We Are");
        expect(component.find('.view4-subtitle').text()).toBe("We are students at the University of Portland dedicated to fighting overpriced textbooks");
        expect(component.find('.member-description').getElements().length).toBe(6);
        expect(component.find('.member-paragraph').getElements().length).toBe(6);
        expect(component.find(Image).getElements().length).toBe(6);
        expect(component.find(Image).at(0).props().src).toBe(ColeImage);
        expect(component.find(Image).at(1).props().src).toBe(CharlesImage);
        expect(component.find(Image).at(2).props().src).toBe(NateImage);
        expect(component.find(Image).at(3).props().src).toBe(AvayaImage);
        expect(component.find(Image).at(4).props().src).toBe(MichaelImage);
        expect(component.find(Image).at(5).props().src).toBe(JaredImage);
    });


});
