
// 01. Legegyszerűbb, struktúrát ellenőrző minta:
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "s@t.h";
console.log(email.match(emailPattern));


// 02. 01.v mennyiségi feltételekkel:
const emailPattern2 = /^[^\s@]{3,}@[^\s@]{3,}\.[^\s@]{2,}$/;
const email2 = "csaba@gmail.com";
console.log(email2.match(emailPattern2));


function ellenorzesEmail(){
    const email = document.getElementById('email').value()

    if(email.match(emailPattern2)){

        alert('Email megfelelő ')
    }
    else{alert('Nem megfelelö email struktura')}
}