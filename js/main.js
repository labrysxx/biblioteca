let livros
let default_data = [
  {
    nome: 'Roube Como Um Artista',
    autor: 'Austin Kleon',
    status: 'Lido'
  },
  {
    nome: 'A Mágica da Arrumação',
    autor: 'Marie Kondo',
    status: 'Não Lido'
  },
  {
    nome: 'Meu Ano de Descanso e Relaxamento',
    autor: 'Ottessa Moshfegh',
    status: 'Lido'
  }
]
const NOME = document.getElementById('name')
const AUTOR = document.getElementById('autor')
const STATUS = document.getElementById('status')
const TABLE_BODY = document.getElementById('table-body')
const FORM = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  adicionaLivro()
  carregaLivro()
})

class Book {
  constructor(nome, autor, status) {
    this.nome = nome,
    this.autor = autor,
    this.status = status
  }
}

function adicionaLivro() {
  if(NOME.value.length === 0 || AUTOR.value.length === 0) {
    return alert('Por favor, complete os campos!')
  } else {
    const NOVO_LIVRO = new Book(NOME.value, AUTOR.value, STATUS.value)
   
    livros.push(NOVO_LIVRO)
    atualizaLocalStorage()
  }
}

function atualizaLocalStorage() {
  localStorage.setItem('livros', JSON.stringify(livros))
}

function checaLocalStorage() {
  if(localStorage.getItem('livros')) {
    livros = JSON.parse(localStorage.getItem('livros'))
  } else {
    livros = default_data
  }
}

function carregaLivro() {
  checaLocalStorage()
  TABLE_BODY.innerHTML = ''
  livros.forEach((livro) => {
    const htmlBook = `
      <tr>
        <td>${livro.nome}</td>
        <td>${livro.autor}</td>
        <td><button class="status-button">${livro.status}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
      `;
    TABLE_BODY.insertAdjacentHTML("afterbegin", htmlBook);
  })
}

carregaLivro()

