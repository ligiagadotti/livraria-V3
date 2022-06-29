<script>
export default {
  data() {
    return {
      autores: [
        {
          nomeautor: "J.K. Rowling",
        },
      ],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor !== "") {
        this.autores.push({
          nomeautor: this.novo_autor,
        });
        this.novo_autor = "";
      }
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="form-input">
    <input
      type="text"
      v-model="novo_autor"
      placeholder="Adicionar nome do Autor"
    />
    <button @click="salvar">Salvar</button>
  </div>
  <div class="lista-livros">
    <table>
      <thead>
        <tr>
          <th>Nome do Autor</th>
          <th style="width: 10%">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="autor in autores" :key="autor.id">
          <td>{{ autor.nomeautor }}</td>
          <td>
            <button class="excluir" @click="excluir(autor)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
