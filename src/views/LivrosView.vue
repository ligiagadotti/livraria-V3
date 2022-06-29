<script>
export default {
  data() {
    return {
      livros: [
        {
          titulo: "Harry Potter",
          isbn: "123456",
          quantidade: "14",
          preco: "R$25,70",
        },
      ],
      novo_titulo: "",
      novo_isbn: "",
      novo_quantidade: "",
      novo_preco: "",
    };
  },
  methods: {
    salvar() {
      if (
        this.novo_titulo &&
        this.novo_isbn &&
        this.novo_quantidade &&
        this.novo_preco !== ""
      ) {
        this.livros.push({
          titulo: this.novo_titulo,
          isbn: this.novo_isbn,
          quantidade: this.novo_quantidade,
          preco: this.novo_preco,
        });
        this.novo_titulo = "";
        this.novo_isbn = "";
        this.novo_quantidade = "";
        this.novo_preco = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="form-input">
    <input type="text" v-model="novo_titulo" placeholder="Título do livro" />
    <input type="text" v-model="novo_isbn" placeholder="ISBN do livro" />
    <input
      type="text"
      v-model="novo_quantidade"
      placeholder="Quantidade do livro"
    />
    <input type="text" v-model="novo_preco" placeholder="Preço do livro" />
    <button @click="salvar">Salvar</button>
  </div>
  <div class="lista-livros">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>ISBN</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th style="width: 10%">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" :key="livro.id">
          <td>{{ livro.titulo }}</td>
          <td>{{ livro.isbn }}</td>
          <td>{{ livro.quantidade }}</td>
          <td>{{ livro.preco }}</td>
          <td>
            <button class="excluir" @click="excluir(livro)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
