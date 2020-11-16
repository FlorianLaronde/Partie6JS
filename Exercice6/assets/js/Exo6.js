let firstNumber  = prompt('Entrez une première valeur comprise entre 1 et 10.');
let secondNumber = prompt('Entrez une deuxième valeur comprise entre 1 et 10.');


while ( firstNumber > 1) {
    firstNumber = firstNumber / secondNumber;
    document.write( '<div>' + firstNumber + '</div>')
    

}