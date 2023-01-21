<template>
  <div class="header-div">
    <h2 class="welcome">Página principal</h2>
    <p class="text">Aplicação realizada para o desafio Front End</p>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'
import { defineComponent, onMounted } from 'vue'

export default {
  name: 'IndexPage',

}
</script>

<style>
.header-div {
  margin: auto;
  width: 50%;
  padding: 50px;
}

.welcome {
  text-align: center;
}

.text {
  text-align: center;
  font-size: larger;
}
</style>
