// 1 - Test get articles from DB
// 2 - Render articles
// 3 - Rendering more articles when click on load more button  
import React from 'react';
import { storeFactory, findByTestAttribute } from '../../../tests/testsUtils'
import '../../../tests/setupTests';
import { changeSearch, changeSort } from '../../../store/search';
import { mount } from 'enzyme';
import ArticlesList from '../ArticlesList'
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';

jest.mock('../../../services');

const client = new QueryClient();

const setup = (store) => mount(
    <QueryClientProvider client={client}>
        <Provider store={store}>
            <ArticlesList />
        </Provider>
    </QueryClientProvider>
);

const articleMock = {
    id: 123,
    featured: false,
    title: "String",
    url: "String",
    imageUrl: "String",
    summary: "String",
    publishedAt: "String",
    launches: null,
    events: null,
}


describe('search action dispatcher', () => {
    let store;
    const searchWord = "Space";

    const initialState = {
        search: "",
        sort: "",
    };

    const sort = "oldest";
    beforeEach(() => {
        store = storeFactory(initialState);
    });
    it('updates state correctly when searching', () => {
        store.dispatch(changeSearch(searchWord));
        const newState = store.getState();
        const expectedState = {
            search: searchWord,
        }
        expect(newState["search"]).toBe(expectedState.search);
    });

    it('updates state correctly when sorting', () => {
        store.dispatch(changeSort(sort));
        const newState = store.getState();
        const expectedState = {
            sort: sort,
        }
        expect(newState["sort"]).toBe(expectedState.sort);

    });
});

