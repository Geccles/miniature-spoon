const characterName = document.getElementById('name')
const characterGender = document.getElementById('gender')
const birthYear = document.getElementById('birth_year')

const fetchNewCharacter = () => {
    const randomNumber = Math.ceil(Math.random() * 83)
    fetch(`https://swapi.dev/api/people/${randomNumber}`).then(
        response => response.json()
    ).then(data => {
        characterName.innerHTML = data['name']
        characterGender.innerHTML = data['gender']
        birthYear.innerHTML = data['birth_year']
    })
}

const button = document.querySelector(".getRandomCharacter")
button.addEventListener('click', (e) => {
    e.preventDefault()
    characterName.innerHTML = "<em>Loading...</em>"
    characterGender.innerHTML = "<em>Loading...</em>"
    birthYear.innerHTML = "<em>Loading...</em>"
    fetchNewCharacter()
})


