let firstNumber  = prompt('Entrez une première valeur comprise entre 1 et 10.');
let secondNumber = prompt('Entrez une deuxième valeur comprise entre 1 et 10.');


while ( secondNumber < 250) {
    document.write( '<div>' + secondNumber + '</div>')
    secondNumber = firstNumber * secondNumber;
    

}