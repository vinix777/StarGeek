var listaMusicas = []

listaMusicas = JSON.parse(localStorage.getItem('bdMusicas'))
if (listaMusicas == null) {
    listaMusicas = []
}

console.log (listaMusicas)

function botaoVoltar() {
    location.href = "inicial.html"
}

function validarCadastro(nomeMusica, imagemMusica, musicaLink, descrição) {
    if (nomeMusica != '' && imagemMusica != '' && musicaLink != '' && descrição != '') {
        return true
    } else {
        return false
    }
}

function botaoCadastrar() {
    var nomeMusica = document.getElementById("nome").value
    var imagemMusica = document.getElementById("linkImg").value
    var musicaLink = document.getElementById("linkMusica").value
    var descrição = document.getElementById("descrição").value

    var possoCadastrar = validarCadastro(nomeMusica, imagemMusica, musicaLink, descrição)
    if (possoCadastrar == false) {
        alert('Verifique os dados antes de cadastrar')
        return
    }

    var musica = {
        nome: nomeMusica,
        link: imagemMusica,
        linkMsc: musicaLink,
        descrição: descrição
    }
    listaMusicas.push(musica)

    localStorage.setItem('bdMusicas', JSON.stringify(listaMusicas))

    document.getElementById("nome").value = ''
    document.getElementById("linkImg").value = ''
    document.getElementById("linkMusica").value = ''
    document.getElementById("descrição").value = ''
    document.getElementById("nome").focus()

}

function botaoVoltar() {
    location.href = "inicial.html"
}

exibirMusicas()

function exibirMusicas() {
    document.getElementById('lista-musicas').innerHTML = ''
    listaMusicas.forEach((item, pos) => {
        document.getElementById('lista-musicas').innerHTML +=
            `<div class="musicas">
                <div class="nomes-musicas">
                    <img src="${item.link}" alt="" class="img-buteco">
                    <div>
                        <h2>${item.nome}</h2>
                        <p>${item.descrição}</p>
                    </div>
                </div>
                <div class="botoes-musica">
                    <a href="${item.linkMsc}" class="botao-reproduzir"><img
                            src="img/arrow-right.svg" alt="">Reproduzir</a>
                            <a href="#" class="botao-adicionar" onclick='excluirMusica(${pos})'><img src="trash.svg" alt="">Excluir</a>
                </div>
            </div>`
    })
}

function excluirMusica(pos) {
    listaMusicas.splice(pos, 1)
    localStorage.setItem('bdMusicas', JSON.stringify(listaMusicas))
    exibirMusicas()
}

function cadastrar(){
    location.href = "cadastro-midia.html"
}

function inicio(){
    location.href = "index.html"
}

function sair(){
    location.href = "index.html"
}



/* 

var musicas = []
var linkImagens = []
var linkMsc = []

function botaoCadastrar(){
    var nome = document.getElementById("nome").value
    var LinkMusica = document.getElementById("linkMusica")
    var LinkImg = document.getElementById("linkImg").value  
    filmes.push(nome)
    link.push(linkImg)
    linkMsc.push(LinkMusica)
    document.getElementById('resultado').innerHTML = ''

    for ( var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML += `<div class="musicas">
        <div class="nomes-musicas">
            <img src="${linkImagens[i]}" alt="" class="img-agro">
            <div>
                <h2>${musicas}</h2>
            </div>
        </div>
        <div class="botoes-musica">
            <a href="${linkMsc[i]}" class="botao-reproduzir"><img src="img/arrow-right.svg" alt="">Reproduzir</a>
            <a href="#" class="botao-adicionar"><img src="img/add-to-list.svg" alt="">Adicionar</a>
        </div>
    </div>`
    }

}   */