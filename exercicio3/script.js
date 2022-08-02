// OBJETO ORIGINAL:

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// ITEM A: 

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

// ITEM B:

pokemon1.ataques = []

pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})

// ITEM C:

pokemon2.ataques = [...pokemon1.ataques]

// ITEM D:

pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
})

// ITEM E:

pokemon2.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})

// ITEM F: 

console.log(pokemon1)
console.log(pokemon2)

