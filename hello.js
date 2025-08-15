const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
            <html>
                <head>
                      <title>Halo dari Node.js</title>
                            <style>
                                    body {
                                              font-family: Arial, sans-serif;
                                                        background-color: #f0f0f0;
                                                                  text-align: center;
                                                                            padding-top: 50px;
                                                                                    }
                                                                                            h1 {
                                                                                                      color: #333;
                                                                                                              }
                                                                                                                    </style>
                                                                                                                        </head>
                                                                                                                            <body>
                                                                                                                                  <h1>Halo! 👋</h1>
                                                                                                                                        <p>Selamat datang di server Node.js pertamamu.</p>
                                                                                                                                            </body>
                                                                                                                                                </html>
                                                                                                                                                  `);
                                                                                                                                                  });

                                                                                                                                                  server.listen(3000, () => {
                                                                                                                                                    console.log('Server berjalan di http://localhost:3000');
                                                                                                                                                    });