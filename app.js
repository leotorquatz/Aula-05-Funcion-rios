'use strict';

const funcionarios = [
    {
        nome: "Maria Souza",
        cargo: "Designer",
        imagem: "maria.jpg"
    },

    {
        nome: "João Silva",
        cargo: "DBA",
        imagem: "joao.jpg"
    
    },

    {
        nome: "Hugo Pereira",
        cargo: "Gerente",
        imagem: "hugo.jpg"
    },

    {
        nome: "Ana Maria",
        cargo: "Desenvolvedora Web",
        imagem: 'ana.jpg'
    }
];

const cardContainer = document.getElementById('card-container');

const criarCard = (funcionario) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imagem = document.createElement('img');
    imagem.src = `./img/${funcionario.imagem}`; 
    imagem.alt = funcionario.nome;

    const name = document.createElement('h2');
    name.textContent = funcionario.nome;

    const cargo = document.createElement('p');
    cargo.textContent = funcionario.cargo; 

    card.appendChild(imagem);
    card.appendChild(name);
    card.appendChild(cargo); 

    return card;
};

const mostrarNomes = (funcionario) => console.log(funcionario.nome);

const mostrarCards = (funcionario) => {
    const card = criarCard(funcionario);
    cardContainer.appendChild(card); 
};

funcionarios.forEach(mostrarCards); 