// declare variables as a global variable
let filmsMat, trainedModelMat=[], filmIndex, distances, recommendations, given_film

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
    given_film = document.getElementById('input').valueOf().value
    document.getElementById('input').valueOf().value = ''
    submitForm(given_film)
})
function submitForm(given_film) {
    for (let i = 0; i < filmsMat.length; i++) {
        if (filmsMat[i] === given_film) {
            console.log(i, filmsMat[i])
        }
    }

}

