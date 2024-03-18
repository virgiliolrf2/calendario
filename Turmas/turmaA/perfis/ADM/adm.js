function logar() {
    var login = document.querySelector ('#login').value
    var senha = document.querySelector ('#senha').value

    if (login === 'administradorA' && senha === '123456') {
        window.location.href = '/Turmas/calendarios/calendarioA/calendarioa.html'
    }
    else {
        alert ('nome ou usuário estão incorretos')
    }
}
