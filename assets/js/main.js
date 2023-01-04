

document.getElementById('myButton').addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white';
    document.getElementById('myButton').innerHTML = '⚫️'
    document.body.style.color = 'black';
    } else {
    document.body.style.backgroundColor = 'black';
    document.getElementById('myButton').innerHTML = '⚪️'
    document.body.style.color = 'white';
    }
})


article_line
