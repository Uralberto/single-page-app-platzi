

const resolveRoutes = (route) => {
// Vamos a necesitar un valor muy particular, la ruta (route) en este caso 

    if(route.length <= 3) {
       let validRoute =  route === '/' ? route : '/:id'
       return validRoute
    }

    return `/${route}`
}

export default resolveRoutes