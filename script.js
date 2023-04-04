const form = document.getElementById('form');
const listaDados = document.getElementById('lista-dados');
let dados = [];

const botaoSalvar = document.getElementById("salvar");

botaoSalvar.addEventListener("click", function (event) {
  event.preventDefault();

  salvarDados();
});

// Função para salvar dados
function salvarDados() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const idade = document.getElementById('idade').value;

  const novoDado = {
    "nome": nome,
    "email": email,
    "telefone": telefone,
    "idade": idade
  };

  if (document.getElementById('salvar').innerText === 'Salvar') {
    dados.push(novoDado);
  } else {
    const index = document.getElementById('indice').value;
    dados[index].nome = nome;
    dados[index].email = email;
    dados[index].telefone = telefone;
    dados[index].idade = idade;
    document.getElementById('salvar').innerText = 'Salvar';
  }

  console.log(dados);
  atualizarTabela();
  limparFormulario();
}

// Função para atualizar a tabela de dados
function atualizarTabela() {
  listaDados.innerHTML = '';

  for (let i = 0; i < dados.length; i++) {
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.innerText = dados[i].nome;
    const tdEmail = document.createElement('td');
    tdEmail.innerText = dados[i].email;
    const tdTelefone = document.createElement('td');
    tdTelefone.innerText = dados[i].telefone;
    const tdIdade = document.createElement('td');
    tdIdade.innerText = dados[i].idade;
    const tdAcao = document.createElement('td');
    const btnEditar = document.createElement('button');
    btnEditar.innerText = 'Editar';
    btnEditar.onclick = () => editarDados(i);
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Excluir';
    btnExcluir.onclick = () => excluirDados(i);
    tdAcao.appendChild(btnEditar);
    tdAcao.appendChild(btnExcluir);

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdIdade);
    tr.appendChild(tdAcao);

    listaDados.appendChild(tr);
  }
}

// Função para limpar o formulário
function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('idade').value = '';
}

// Função para editar dados
function editarDados(i) {
  document.getElementById('nome').value = dados[i].nome;
  document.getElementById('email').value = dados[i].email;
  document.getElementById('telefone').value = dados[i].telefone;
  document.getElementById('idade').value = dados[i].idade;
  document.getElementById('salvar').innerText = 'Atualizar';
  document.getElementById('indice').value = i;
  form.onsubmit = (event) => {
    event.preventDefault();
    salvarDados();
  };
}

// Função para excluir dados
function excluirDados(i) {
  if (confirm('Tem certeza que deseja excluir este dado?')) {
    dados.splice(i, 1);
    atualizarTabela();
  }
}

// Event listeners
form.onsubmit = salvarDados;
document.getElementById('limpar').onclick = limparFormulario;