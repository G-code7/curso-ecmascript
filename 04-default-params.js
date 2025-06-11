function newUser(name, age, country) {
    var name = name || 'Gustavo';
    var age = age || 30;
    var country = country || 'venezuela';
    console.log(name, age, country);
}

newUser();
newUser('Pretrofu', 25, 'Colombia');

// con ECMASCRIPT 6 
function newUser(name = 'Gustavo', age = 30, country = 'venezuela') {
    console.log(name, age, country);
}

newUser();
newUser('Pretrofu', 25, 'Colombia');