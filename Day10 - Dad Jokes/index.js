const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#joke-btn')

jokeBtn.addEventListener('click', generateJokes)

generateJokes()

async function generateJokes() {
  const setHeader = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com/', setHeader)
  const data = await res.json()

  jokes.innerHTML = data.joke
}

// function generateJokes() {
//   const setHeader = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke
//     })
// }
