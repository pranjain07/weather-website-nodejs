console.log('Client side javascript file is loaded!')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')
const messageEight = document.querySelector('#message-8')
const messageNine = document.querySelector('#message-9')


weatherform.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ' ' 
    messageThree.textContent = ' ' 
    messageFour.textContent = ' ' 
    messageFive.textContent = ' ' 
    messageSix.textContent = ' ' 
    messageSeven.textContent = ' ' 
    messageEight.textContent = ' ' 
    messageNine.textContent = ' ' 
   
    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) =>
    {
        if(data.error)
        {
            messageOne.textContent = data.error

        }
    else {
             messageOne.textContent = data.location
             messageTwo.textContent = data.forecast.sum
             messageThree.textContent = data.forecast.temp
             messageFour.textContent = data.forecast.rain
             messageFive.textContent = data.forecast.hum
             messageSix.textContent = data.forecast.wind
             messageSeven.textContent = data.forecast.temph
             messageEight.textContent = data.forecast.templ
             messageNine.textContent = data.forecast.pressure
        }
    })
})
})