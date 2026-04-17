import dayjs from "dayjs";
import 'dayjs/locale/es.js';
dayjs.locale('es');

function mostrarHora() {
    const horaActual = dayjs().format("HH:mm:ss");
    return horaActual;
}

function mostrarFecha() {
    const fechaCompleta = dayjs().format("dddd, D [de] MMMM [de] YYYY HH:mm:ss");
    return fechaCompleta;
}

export { mostrarHora, mostrarFecha };

