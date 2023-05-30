const apiKey = '0afcd960d728176569f99e682a6da658'
let city = ''
const input = document.querySelector('.search')
const cityName = document.querySelector('#cityName')
const temp = document.querySelector('.temp')
const text = document.querySelector('.text')
const icon = document.querySelector('img')
const section = document.querySelector('.section')

section.style.display = 'none'

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

input.addEventListener('change', (e) => {
    city = e.target.value
    section.style.display = 'block'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const getData = () => {
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            temp.innerHTML = `${data.main.temp}<sup>°C</sup>`
            cityName.innerHTML = `${data.name}<sup style="background-color: red;">${data.sys.country}</sup>`
            text.textContent = data.weather[0].description.toUpperCase()
            icon.src = `./icons/${data.weather[0].main.toLowerCase()}.png`
        })
    }
    getData()
})


