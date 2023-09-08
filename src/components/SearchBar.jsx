async function SearchResult () {
    const url = 'https://spotify-web2.p.rapidapi.com/search/?q=' + {SEARCH};
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b1de8876damsh6882c98db67483bp17156djsnced71ceb7ee8',
            'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    return
}