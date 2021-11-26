const buttonNodes = document.querySelectorAll('ul li')
const resultNode = document.querySelector('.result')

buttonNodes.forEach((node) => {
    node.addEventListener('click', function (event) {
        event.preventDefault()
        const value = node.innerText.trim()
        const resultText = resultNode.innerText.trim()

        if (resultText == '0' || resultText == 'Infinity') {
            resultNode.innerText = ''
        }

        if (value == '=') {
            let solution = eval(resultText)
            resultNode.innerText = solution
            return true
        }

        if (value == 'C') {
            resultNode.innerText = '0'
            return true
        }

        resultNode.append(value)
        console.log(resultText)
    })
})