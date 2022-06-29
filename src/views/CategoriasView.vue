<script>
export default {
  data() {
    return {
      categorias: [
        {
          titulo: "Harry Potter",
          descricao: "Fantasia, Magia",
        },
      ],
      novo_titulo: "",
      novo_descricao: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_descricao && this.novo_titulo !== "") {
        this.categorias.push({
          titulo: this.novo_titulo,
          descricao: this.novo_descricao,
        });
        this.novo_titulo = "";
        this.novo_descricao = "";
      }
    },
    excluir(categoria) {
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="form-input">
    <input type="text" v-model="novo_titulo" placeholder="Nome do livro" />
    <input
      type="text"
      v-model="novo_descricao"
      placeholder="Descrição do livro"
    />
    <button @click="salvar">Salvar</button>
  </div>
  <div class="lista-livros">
    <table style="width: 60%">
      <thead>
        <tr>
          <th style="width: 10%">Título</th>
          <th style="width: 40%">Descrição</th>
          <th style="width: 10%">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.titulo }}</td>
          <td>{{ categoria.descricao }}</td>
          <td>
            <button class="excluir" @click="excluir(categoria)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
