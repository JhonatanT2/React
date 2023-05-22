export const getIdFromURL=(url)=> {
    const url_split=url.split('/');
    const w= url_split.length;
    return url_split[w-2]

}