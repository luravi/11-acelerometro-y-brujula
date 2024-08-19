let angulo = 0
let x = 0
// Calibrar la brújula al inicio
input.calibrateCompass()
// Iniciar la ejecución continua de la función on_forever
basic.forever(function () {
    let direccion: string;
// Obtener la inclinación en el eje X y la dirección de la brújula
    x = input.acceleration(Dimension.X)
    angulo = input.compassHeading()
    // Determinar la dirección cardinal
    if (angulo < 45 || angulo > 315) {
        direccion = "N"
    } else if (angulo < 135) {
        direccion = "E"
    } else if (angulo < 225) {
        direccion = "S"
    } else {
        direccion = "O"
    }
    // Determinar la inclinación y mostrar la dirección con el símbolo correspondiente
    if (x > 200) {
        basic.showString("" + direccion + " >")
    } else if (x < -200) {
        basic.showString("" + direccion + " <")
    } else {
        basic.showString("" + direccion + " -")
    }
})
