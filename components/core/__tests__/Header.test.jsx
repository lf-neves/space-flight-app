import React from 'react'
import '../../../tests/setupTests'
import { shallow, mount } from 'enzyme';
import { findByTestAttribute } from '../../../tests/testsUtils';
import Header from '../Header';

// 1- Just check if Header is rendering correctly

const setup = () => shallow(<Header />)

describe('Header is rendering correctly', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })
    it('icons are rendering correctly', () => {
        expect(findByTestAttribute(wrapper, 'RocketIcon').length).toBe(1);
    });
    it('Title is rendering correctly', () => {
        expect(findByTestAttribute(wrapper, 'Title').length).toBe(1);
    });
});

