import ArticleInterface from "../classes/ArticleInterface";

export const fetchWrapper = {
    get,
    del,
    put,
}

async function get(url: string) {
    const requestOptions: RequestInit = {
        method: 'GET'
    }
    return fetch(url, requestOptions).then(handleResponse);
}

async function del(url: string, id: number) {
    const requestOptions: RequestInit = {
        method: 'DELETE',
        body: JSON.stringify({ "id": id }),
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(url, requestOptions);
}

async function put(url: string, article: ArticleInterface) {

    const payload = {
        id: article.id,
        title: article.title,
        summary: article.summary,
        newsSite: 'teste'
    }

    const requestOPtions: RequestInit = {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(url, requestOPtions).then(handleResponse);
}

async function handleResponse(response: Response) {

    const responseText = await response.text();
    const data = responseText && JSON.parse(responseText);

    if (!response.ok) {
        const error = (data && data.message) || response.statusText
        throw new Error(error);
    }

    return data;
}