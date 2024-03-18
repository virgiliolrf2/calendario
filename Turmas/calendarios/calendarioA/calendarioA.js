let nav = 0;
let clicked = null;
let eventos = [];

if (localStorage.getItem('eventos')) {
    eventos = JSON.parse(localStorage.getItem('eventos'));
} else {
    eventos = [];
    console.log('Não encontrei nenhum evento :)');
}

const calendario = document.querySelector('#calendario');
const displayMes = document.querySelector('#displayMes');
const voltar = document.querySelector ('#botaovoltar');
const proximo = document.querySelector ('#botaoproximo');
const diasSemana = ['domingo','segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

function carregar() {
    let date = new Date();

    if (nav !== 0) {
        date.setMonth(date.getMonth() + nav);
    }

    const dia = date.getDate();
    const mes = date.getMonth();
    const ano = date.getFullYear();

    const diaDoMes = new Date(ano, mes, 0).getDate(); 
    const dia1mes =  new Date(ano, mes-1, 1).toLocaleString('pt-BR', { weekday: 'long' });

    const diasMes = diasSemana.indexOf(dia1mes.split(', ')[0]);

    displayMes.innerText = `${date.toLocaleString('pt-br', {month: 'long'}).toUpperCase()}, ${ano}`;
    
    calendario.innerHTML = '';

    for (let i = 0; i < diasMes + diaDoMes; i++) {
        const diaElemento = document.createElement('div');
        diaElemento.classList.add('dia');
        const diaString = mes + diaDoMes + ano;
        calendario.appendChild(diaElemento);
    } 
}

carregar();
