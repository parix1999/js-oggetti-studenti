/* PARTE 1:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte 
le proprietà dell’oggetto.
*/
var output1 = document.getElementById('result');
// Creo la variabile con gli oggetti (key e valore):
var studente = {
// key : valore,
    name : 'Edoardo',
    surname : 'Parisotto',
    age : '21'
}

// Ora mi serve un for in per stampare i vari oggetti contenuti nella var stundente.
for (var key in studente) {
    console.log(key, studente[key]);
    output1.innerHTML += '<li>' +  key + ' ' +studente[key] + '</li>'
}