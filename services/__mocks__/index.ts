module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    getArticlesByPage: jest.fn().mockReturnValue(Promise.resolve([
        { title: 'title1', summary: 'summary1' },
        { title: 'title2', summary: 'summary2' },
    ])),
}