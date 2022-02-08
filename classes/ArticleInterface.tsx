
interface ArticleInterface {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    summary: string,
    publishedAt: string,
    launches: Array<string>,
    events: Array<string>,
    newsSite: string,
}

export default ArticleInterface;
