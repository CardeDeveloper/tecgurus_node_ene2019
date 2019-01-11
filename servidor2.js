const http = require('http')

http.createServer((req, res ) =>{
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Landing</title>
    </head>
    <body>
        <header>
            <a href="">Inicio</a>
            <a href="">nosotros</a>
            <a href="">quienes somos</a>
            <a href="">Contacto</a>
    
        </header>
        <section>
            <div style="display: flex; justify-content: center; align-items:center">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquam ut neque voluptas illum magnam placeat asperiores, optio tenetur autem dolor, voluptate 
                    minima tempora vitae. Quos repellendus numquam ratione nemo.
                </div>
            </div>
        </section>
    </body>
    </html>`)
}).listen(8080)
