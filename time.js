import dayjs from "dayjs";

function mostrarHora() {
    const horaActual = dayjs().format("HH:mm:ss");
    return horaActual;
}
export { mostrarHora };