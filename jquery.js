const randomNumber = Math.ceil(Math.random() * 83)
$.get(`https://swapi.dev/api/people/${randomNumber}`, function(data){
    console.log(data, "jQuery request")
})
