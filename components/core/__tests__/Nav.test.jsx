import React from 'react'
import { mount } from 'enzyme'
import Nav from '../Nav'
import { Provider } from 'react-redux';
import { store } from "../../store/store";
import '../../tests/setupTests'
import { findByTestAttribute } from '../../tests/testsUtils';

// 0- test if nav is rendering correctly
// 1- Test if search input is working 
// 2- Test if select input is working
// 3- Test redux storing

const setup = () => mount(<Provider store={store}><Nav /></Provider>)

describe('Nav is rendering correctly and without crashing', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });
    it('Nav is rendering', () => expect(findByTestAttribute(wrapper, 'NavBar').length > 0).toBe(true));
    it('Nav has a search input', () => expect(findByTestAttribute(wrapper, 'SearchInput').length > 0).toBe(true))
    it('Nav has a select input', () => expect(findByTestAttribute(wrapper, 'SelectInput').length > 0).toBe(true))
});
