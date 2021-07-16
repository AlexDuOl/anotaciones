#Adivina el Número
import random

intentosRealizados = 0

print('¡Hola! ¿Cómo te llamas?')
miNombre = input()

numero = random.randint(1,20)
print('Bueno, ' + miNombre + ', estoy pensando en un número entre 1 y 20.')

while intentosRealizados < 6:
    print('Intenta adivinar.')
    estimacion = input()
    estimacion = int(estimacion)

    intentosRealizados = intentosRealizados + 1

    if estimacion < numero:
        print('Tu estimación es muy baja.')

    if estimacion > numero:
        print('Tu estimación es muy alta.')

    if estimacion == numero:
        break

if estimacion == numero:
    intentosRealizados = str(intentosRealizados)
    print('¡Buen trabajo, ' + miNombre + '!¡Has adivinado mi número en ' + intentosRealizados + ' intentos!')
    
if estimacion != numero:
    numero = str(numero)
    print('Pes no. El número que estaba pensando era ' + numero)
