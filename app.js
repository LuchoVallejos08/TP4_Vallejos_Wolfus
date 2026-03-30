import express from "express";
import { mostrarHora } from "./time.js";

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
})

app.get('/hora', (req, res) => {
    const horaActual = mostrarHora();
    res.send(`La hora actual es: ${horaActual}`);
})
app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
})

app.get("/error", (req, res) => {
    res.status(404).send("Página no encontrada");
});
