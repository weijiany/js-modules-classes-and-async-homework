import 'node-fetch'

export const getPoetry = async function () {
    let res = await fetch("https://v1.jinrishici.com/all.json");
    let {origin, author, content} = await res.json();
    return [origin, author, content]
}