let divMultiple = document.getElementById('multiple');
let text = '...';
// let multiple = 0;

for (let multiple = 0; multiple < 101; multiple++) {
    let content = divMultiple.innerHTML;
    if ( multiple % 15 == 0 && multiple !=0) {
        divMultiple.innerHTML = content + '<div>' + text + '</div>';
    } else {
        divMultiple.innerHTML = content + '<div>' + multiple + '</div>';
    }
}


