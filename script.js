let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '0e299e8b2c49580d1a9a1a2aef0aefcb'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const pais = data.sys.country
    const  ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${pais}, ${ciudadNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

    const iconoInfo = document.createElement('img')
    //iconoInfo.src=`https://openweathermap.org/img/wn/@2x.png`
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`


    const descripcionInfo = document.createElement('p') 
    descripcionInfo.textContent = `La descripción meterológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
}

 