<script setup>
import CabecalhoComp from "@/components/CabecalhoComp.vue";
</script>

<template>
  <CabecalhoComp />
  <main><RouterView /></main>
</template>
<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
  margin: 0 auto;
}
main {
  height: 94%;
}
a {
  color: black;
  text-decoration: none;
}
.router-link-active:hover {
  font-weight: bolder;
}
</style>
