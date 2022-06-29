<script>
export default {
  data() {
    return {
      editoras: [
        {
          nomeeditora: "Rocco",
          site: "www.rocco.com",
        },
      ],
      novo_nomeeditora: "",
      novo_site: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_nomeeditora && this.novo_site !== "") {
        this.editoras.push({
          nomeeditora: this.novo_nomeeditora,
          site: this.novo_site,
        });
        this.novo_nomeeditora = "";
        this.novo_site = "";
      }
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="form-input">
    <input
      type="text"
      v-model="novo_nomeeditora"
      placeholder="Nome da Editora"
    />
    <input
      type="text"
      v-model="novo_site"
      placeholder="Link do site da Editora"
    />
    <button @click="salvar">Salvar</button>
  </div>
  <div class="lista-livros">
    <table>
      <thead>
        <tr>
          <th>Editora</th>
          <th>Site</th>
          <th style="width: 10%">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="editora in editoras" :key="editora.id">
          <td>{{ editora.nomeeditora }}</td>
          <td>{{ editora.site }}</td>
          <td>
            <button class="excluir" @click="excluir(editora)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
