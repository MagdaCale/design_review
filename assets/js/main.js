

document.getElementById('myButton').addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        document.getElementById('myButton').innerHTML = '⚫️'
        document.querySelector('.bg').style.backgroundColor = '#eeecf3'
        document.querySelector('.article_five').style.borderTop = '2px solid black';
        document.querySelector('.change_colour').style.color = 'black';
        document.querySelector('.price').style.color = 'black';


    } else {
            document.body.style.color = 'white';
            document.body.style.backgroundColor = 'black';
            document.getElementById('myButton').innerHTML = '⚪️'
            document.querySelector('.bg').style.backgroundColor = 'black'
            document.querySelector('.article_five').style.borderTop = '2px solid white';
            document.querySelector('.change_colour').style.color = 'white';
            document.querySelector('.price').style.color = 'white';
    }
})


