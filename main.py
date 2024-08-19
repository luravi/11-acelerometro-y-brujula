# Calibrar la brújula al inicio
input.calibrate_compass()

def on_forever():
    # Obtener la inclinación en el eje X y la dirección de la brújula
    x = input.acceleration(Dimension.X)
    angulo = input.compass_heading()
    
    # Determinar la dirección cardinal
    if angulo < 45 or angulo > 315:
        direccion = "N"
    elif angulo < 135:
        direccion = "E"
    elif angulo < 225:
        direccion = "S"
    else:
        direccion = "O"
    
    # Determinar la inclinación y mostrar la dirección con el símbolo correspondiente
    if x > 200:
        basic.show_string(direccion + " >")
    elif x < -200:
        basic.show_string(direccion + " <")
    else:
        basic.show_string(direccion + " -")

# Iniciar la ejecución continua de la función on_forever
basic.forever(on_forever)

