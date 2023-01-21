// Fetches random word from API

const randomWord = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const json = await res.json();
    return json;
}

// Fetches ALL words array from API

const totalWords = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/all");
    const allW = await res.json();
    return allW;
}

export { randomWord, totalWords};
