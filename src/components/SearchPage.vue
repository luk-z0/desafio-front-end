<!-- eslint-disable vue/attributes-order -->
<template>
  <div>
    <input type="text" @input="people = $event.target.value" />
    <button @:click="getSearch" name="button">Search</button>
  </div>
  <div>
    {{ peopleInfo }}
  </div>

</template>

<script setup>
import { api } from 'src/boot/axios'
import { onMounted, ref } from 'vue';

let people = ""
let peopleInfo = ref([]);

function getSearch() {
  api.get('/people/?search=' + people)
    .then((response) => {
      peopleInfo.value = response.data.results;
      console.log(response.data.results);
    }).catch((err) => {
      console.log(err);
    });
}

</script>

