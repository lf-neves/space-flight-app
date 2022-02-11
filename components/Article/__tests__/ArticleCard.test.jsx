import React from "react";
import '@/tests/setupTests'
import { shallow } from "enzyme";
import { ArticleCard } from '@/components/Article'

import { findByTestAttribute } from '@/tests/testsUtils'

// 1- Have a title
// 2- Have a Summary text
// 3- Have a button with a valid link to the article

const article = {
    id: 45646545,
    featured: true,
    title: "teste",
    url: "www.site.com",
    imageUrl: "www.site.com",
    summary: "String",
    publishedAt: "String",
    launches: [],
    events: [],
}

const setup = (props = {}) => shallow(<ArticleCard {...props} />);

test('Article card rendering', () => {
    const wrapper = setup({ article: article });
    expect(wrapper.exists()).toBe(true);
});

test('Article card have a title', () => {
    const wrapper = setup({ article: article });
    expect(findByTestAttribute(wrapper, 'cardTitle').length).toBe(1);
});

test('Article card have a Summary text', () => {
    const wrapper = setup({ article: article });
    expect(findByTestAttribute(wrapper, 'cardSummary').length).toBe(1);
});

test('Renders button', () => {
    const wrapper = setup({ article: article });
    const button = findByTestAttribute(wrapper, 'cardButton');
    expect(button.length).toBe(1)
});

test('Clicking on button opens article page', () => {
    const wrapper = setup({ article: article });
    const button = findByTestAttribute(wrapper, 'cardButton');
    button.simulate('click');

})



