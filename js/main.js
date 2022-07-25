let questions = document.querySelectorAll('.question')
let answers = document.querySelectorAll('.answer')

questions.forEach(question => {
    question.addEventListener('click', () => {
        let answer = question.nextElementSibling
        let icon = question.firstElementChild
        if (answer.style.display === 'none') {
            answers.forEach(answer => answer.style.display = 'none')
            questions.forEach(question => question.firstElementChild.src = 'images/plus.png')
            answer.style.display = 'block'
            icon.src = 'images/close.png'
        } else {
            answer.style.display = 'none'
            icon.src = 'images/plus.png'
        }
    })
})