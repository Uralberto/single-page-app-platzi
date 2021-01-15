

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module:{
        rules:[{
            test: /\.js?$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }]
    },
   
    plugins: [
        new HtmlWebPackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        // new CopyWebPackPlugin ([{
        //     from: './src/styles/styles.css',
        //     // Aquí se podría crear una carpeta (assets, style, etc) pero en 
        //     //este caso nuestra configuración no la requiere
        //     to: '' 
        // }])

        new CopyWebpackPlugin ({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          })
    ]
}



// // Path es de node, nos va a permitir definir hacia done vamos dentro de la carpeta
// const path = require('path')
// // Llamando al paquete que se instaló con npm
// const HtmlWebPackPlugin = require('html-webpack-plugin');

//Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.


// module.exports = {
//   //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
//   entry: "./src/index.js",
//   //Creamos el lugar dónde se exportará el proyecto.
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     //Este es el nombre del archivo final para producción.
//     filename: "main.js",
//   },
//   resolve: {
//     //Extensiones que vamos a utilizar.
//     extensions: [".js"],
//   },

//   //Se crea un modulo con las reglas necesarias que vamos a utilizar.
//   module: {
//     //Reglas
//     // Estructura de Babel

//     rules: [{
//         //Nos permite identificar los archivos según se encuentran en nuestro entorno.
//         test: /\.js?$/, 
//         //Excluimos la carpeta de node modules
//         exclude: /node_modules/, 
//         use: {
//             //Utilizar un loader com  o configuración establecida.
//             loader: "babel-loader", 
//         },
//       },
//     ],
//   },
  
//   plugins: [
//     //Establecemos los plugins que vamos a utilizar
//     new HtmlWebPackPlugin([
//       //Permite trabajar con los archivos HTML
//       {
//         //Cómo vamos a inyectar un valor a un archivo HTML.
//         inject: true, 
//         //Dirección donde se encuentra el template principal
//         template: "./public/index.html", 
//         //El nombre que tendrá el archivo
//         filename: "./index.html", 
//       },
//     ]),
//   ],
// };
