import ArticleInterface from "../classes/ArticleInterface";
import { fetchWrapper } from "./fetchWrapper";

const apiUrl = "http://localhost:8000";

export async function getArticlesByPage(page) {
    return fetchWrapper.get(apiUrl + "/page/" + page);
}

export async function getArticle(id) {
    return fetchWrapper.get(apiUrl + '/articles/' + id);
}

export async function getArticles() {
    return fetchWrapper.get(apiUrl + '/articles/');
}

export async function deleteArticle(id: number) {
    return fetchWrapper.del(apiUrl + '/article/', id);
}

export async function editArticle(payload) {
    return fetchWrapper.put(apiUrl + '/article', payload)
}