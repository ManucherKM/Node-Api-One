//Простой способ
// import http from "http";

// const PORT = 5000;

// const server = http.createServer();

// server.on('request', (req, res) => {
//     console.log(req.url);
//     res.end(`Hello, server!`)
// })

// server.listen(PORT, (e) => {
//     if (e) {
//         return console.log(`Error: ${e}`);
//     }
//     console.log(`Server is listening on port ${PORT}`)
// })


//Через express
// Require packages and set the port
import express from 'express';
const port = 3002;
import bodyParser from "body-parser";
const app = express();
import routes from "./routes/routes.js";
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});