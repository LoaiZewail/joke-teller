const button = document.getElementById('button')
const jokeText = document.getElementById('joke')

// get a joke from api
async function fetchJoke() {
    const url =
        'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    try {
        const response = await fetch(url)
        const data = await response.json()
        const { type, setup, delivery } = data
        return type === 'single' ? data.joke : `${setup} ... ${delivery}`
    } catch (error) {
        console.error(`GetJokeError: ${error}`)
    }
}

// fetch a joke and display it
async function tellMeAJoke() {
    try {
        const joke = await fetchJoke()
        jokeText.innerText=joke
    } catch (error) {
        console.error(`TellMeAJokeError: ${error}`)
    }
}

// Event listeners
button.addEventListener('click', tellMeAJoke)