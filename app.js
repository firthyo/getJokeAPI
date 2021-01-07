const jokes = document.querySelector('#newJoke')
const button = document.querySelector('button')


const addNewJoke = async () => {
    const jokeText = await getJoke()
    const newLI = document.createElement('LI')
    // console.log(res.data.joke)
    newLI.append(jokeText)
    jokes.append(newLI)
}
const getJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    }catch (error){
        return "something went wrong"
    }

}

button.addEventListener('click', addNewJoke)
