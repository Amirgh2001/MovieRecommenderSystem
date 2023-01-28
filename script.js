
function submitForm() {
    var form=document.getElementById('form');
    FetchGenre(genre);
}

function FetchGenre(form) {
    // Fetch movies to API
    form.addEventListener('submit', function(e){
        e.preventDefault()
        var genre=form.elements['input'].value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        body:body,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        }
        }).then(function(response){ 
        return response.json()}).then(function(data){console.log(data)
        title=document.getElementById("title")
        body=document.getElementById("bd")
        title.innerHTML = data.title
        body.innerHTML = data.body  
        }).catch(error => console.error('Error:', error)); 
        });
}

function GetMovie() {
    // Get movie from API
    fetch('https://jsonplaceholder.typicode.com/posts/1' {method: 'GET'})
    .then(response => response.json())
    .then(json => console.log(json))
}
