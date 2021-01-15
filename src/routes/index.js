import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'


// UNa buena práctica es no poner la extensión de los archivos que se importan.

const routes = {
'/':  Home,
'/:id': Character, // Se establece así porque el id va a ser un valor dinámico
'/contact': 'Contact',
}

const router = async () => {
const header = null || document.getElementById('header')
const content = null || document.getElementById('content')

// Aquí se inyecta el template dentro de la etiqueta <header> del index.html  
header.innerHTML = await Header() 

let hash = getHash()
let route = await resolveRoutes(hash)

// En vez de esto (routes.'/'), que retornaría el Home, hacemos lo indicado en la siguiente línea:
// De esta forma queda de manera dinámica. route viene de getHash y resolveRoutes
let render = routes[route] ? routes[route] : Error404
content.innerHTML = await render()

}

export default router

