

 // # Funkcijos užrašo supaprastinimas :

function suma (a,b) {

    return a+b 
}

export {suma}

// =>  galima ir taip papraščiau užrašyti :

const suma = function (a,b) {
    return a+b 
}
export {suma}

// =>  galima ir dar papraščiau užrašyti su rodykline f-ja :

const suma = (a,b) => {
    return a+b 
}
export {suma}

// =>  o jei f-jos atsakymas yra vienas, pvz tik vienas return, tada :

const suma = (a,b) => a+b
export {suma}
