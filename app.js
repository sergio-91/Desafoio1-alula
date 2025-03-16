// Criando uma lista vazia para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Pegando o nome digitado no campo de entrada (input)
    let nome = document.getElementById("amigo").value;

    // Verificando se o usuário digitou algo
    if (nome) {
        // Adicionando o nome na lista de amigos
        amigos.push(nome);

        // Atualizando a lista na tela (adicionando o nome na <ul> ou <ol>)
        document.getElementById("listaAmigos").innerHTML += `<li>${nome}</li>`;

        // Limpando o campo de entrada para o próximo nome
        document.getElementById("amigo").value = "";
    } else {
        // Se o usuário não digitou nada, exibe um alerta
        alert("Digite um nome!");
    }
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    // Verifica se a lista não está vazia
    if (amigos.length) {
        // Sorteia um amigo aleatoriamente da lista
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

        // Exibe o nome do amigo sorteado na tela
        document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${sorteado}</li>`;
    } else {
        // Se não houver amigos na lista, exibe um alerta
        alert("Adicione nomes antes de sortear!");
    }
}
