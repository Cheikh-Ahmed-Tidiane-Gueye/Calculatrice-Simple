function Addition() {

    let x = +document.getElementById('x').value
    let y = +document.getElementById('y').value

    document.getElementById('result').value = `La somme de ${x} + ${y} donne ${x + y}`
}

function Soustraction() {

    let x = +document.getElementById('x').value
    let y = +document.getElementById('y').value

    document.getElementById('result').value = `La difference entre ${x} - ${y} donne ${x - y}`
}

function Multiplication() {

    let x = +document.getElementById('x').value
    let y = +document.getElementById('y').value

    document.getElementById('result').value = `Le produit de ${x} × ${y} donne ${x * y}`
}

function Division() {

    let x = +document.getElementById('x').value
    let y = +document.getElementById('y').value

    document.getElementById('result').value = `La division de ${x} ÷ ${y} donne ${x / y}`
}
