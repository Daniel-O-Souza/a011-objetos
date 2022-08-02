const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// ITEM A:

const primeiroAtor = filme.elenco[0]
console.log(primeiroAtor)

// ITEM B:

const ultimoAtor = filme.elenco[3]
console.log(ultimoAtor)

// ITEM C:

const trasmissoes = filme.transmissoesHoje
console.log(trasmissoes)

// ITEM D:

const canalBrasil = filme.transmissoesHoje[1].horario
console.log(canalBrasil)