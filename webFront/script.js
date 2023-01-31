// declare variables as a global variable
let filmsMat, trainedModelMat=[]

const films_csv_path = '../filmNames.csv'
fetch(films_csv_path)
    .then(response => response.text())
    .then(data => {
        filmsMat = data.split('\n')
        })

const trainedModelMat_path = '../trainedModelMat.csv'
fetch(trainedModelMat_path)
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n')
        // console.log(rows)
        rows.map(str => {
            trainedModelMat.push(str.split(','))
        })
    })

document.getElementById('start').addEventListener('click', (ev) => {
    ev.preventDefault()
    let given_film = document.getElementById('input').valueOf().value
    document.getElementById('input').valueOf().value = ''
    submitForm(given_film)
})

const submitForm = (given_film) => {
    let distances
    for (let i = 0; i < filmsMat.length; i++) {
        if (filmsMat[i] === given_film) {
            distances = trainedModelMat[i]
        }
    }
    distances = enumerate(distances).sort((a, b) => b[1] - a[1])
    console.log(distances)
    let similar_movies = ''
    for (let i = 1; i < 10; i++) {
        similar_movies = similar_movies + `<br>${i} - ` + filmsMat[distances[i][0]]
    }
    console.log(similar_movies)
    document.getElementById('response').style.display = "flex"
    document.getElementById('response').innerHTML = `Similar movies with ${given_film} :<br>` + similar_movies
}

const enumerate = (distances) => {
    let enumerated_distances = []
    for (let i = 0; i < distances.length; i++) {
        enumerated_distances.push([i, distances[i]])
    }
    return enumerated_distances
}




