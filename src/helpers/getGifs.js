export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`; // Here put your api key
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        }
    })
    
    return gifs;
}