function gerarbotao() {
if (!document.getElementById("botaoA") && !document.getElementById("botaoI1") && !document.getElementById("botaoI2")  ) {
var botao1 = document.createElement('button')
botao1.id = "botaoA"
botao1.innerText = "Turma A"
botao1.onclick = function () {
    window.location.href = "./Turmas/turmaA/turmaA.html"
}
var botao2 = document.createElement('button')
botao2.id = "botaoI1"
botao2.innerText = "Turma I1"
botao2.onclick = function () {
    window.location.href = "./Turmas/turmaA/turmaI1.html"
}
var botao3 = document.createElement('button')
botao3.id = "botaoI2"
botao3.innerText = "Turma I2"
botao3.onclick = function () {
    window.location.href = "./Turmas/turmaA/turmaI2.html"
}
var container = document.getElementById("botoescontainer")
container.appendChild(botao1)
container.appendChild(botao2)
container.appendChild(botao3)

}
}