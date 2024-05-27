document.querySelector('button').addEventListener('click', convertTemp)
document.querySelector('h2').style.color = 'orange'
document.querySelector('h2').style.fontFamily = 'Arial'
document.querySelector('h2').style.fontSize = '20px'


function convertTemp() {
    let celsius = document.querySelector('input').value
    let fahrenheit = celsius * 9/5 + 32
    document.querySelector('h2').innerText = `${celsius}°C is ${fahrenheit}°F`
}