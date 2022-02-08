
const initialState = {
    search: "",
    sort: "",
}

//action types
export const SEARCH_CHANGED = "search/changed";
export const SORT_CHANGED = "sort/changed";

export function searchReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case SEARCH_CHANGED:
            return { ...state, search: action.payload }
        case SORT_CHANGED:
            return { ...state, sort: action.payload }
        default:
            return state;
    }
}

//action creators
export const changeSearch: any = (search: string) => ({
    type: SEARCH_CHANGED,
    payload: search,
});

export const changeSort: any = (sort: string) => ({
    type: SORT_CHANGED,
    payload: sort,
});

//selectors
export const getSearch = (state: typeof initialState) => state.search;
export const getSort = (state: typeof initialState) => state.sort;




