const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
export default getHash

// location es un elemento del navegador. Hash lo obtengo con el valor de hash 
// Llamado así obtendríamos este valor :    #/1/   Y así no sirve
//  Hay que parsear los elementos para obtener el valor del id, que en este ejemplo es 1
//  Con slide(1) borramo el primer elemento. 
// toLocateLowerCase() para grantizar que si nuestro usuario cambió a mayusculas el contenido, este se siempre será en minúscula.
// split('/') convertimos la cadena de texto a un arreglo eliminado los slash (/)
// split('/')[1] no permite tomar el elemento 1 del arreglo. 
// || '/'   por si no se encuentra ninguna ruta entonces que mande solamente el slash
