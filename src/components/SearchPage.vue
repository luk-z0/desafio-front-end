<template>
  <div>
    <input class="input" type="text" @input="people = $event.target.value" />
    <button class="button-4" name="button" @:click="getSearch">Search</button>
    <div v-if="people !== ''">
      <div v-for="(peoples, i) in peopleInfo" :key="i" class="card-person">
        <div>
          <p> Name : {{ peoples.name }}</p>
          <p> Height : {{ peoples.height }}</p>
          <p> Mass : {{ peoples.mass }}</p>
          <p> Hair Color : {{ peoples.hair_color }}</p>
          <p> Skin Color : {{ peoples.skin_color }}</p>
          <p> Eye Color : {{ peoples.eye_color }}</p>
          <p> Birth Year : {{ peoples.birth_year }}</p>
          <p> Gender : {{ peoples.gender }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { api } from 'src/boot/axios'
import { onMounted, ref } from 'vue';

let people
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

<style scoped>
/* CSS */



.card-person {

  width: 400px;
  padding: 24px;
  margin: 25px;
  border-radius: 10px;
  font-size: 25px;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  background: rgba(212, 212, 207, 1);
}

.p {
  text-align: center
}

.input {
  padding: 10px;
  margin-top: 25px;
  margin-left: 480px;
  width: 400px;
  position: relative;
}


.button-4 {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  margin-left: 10px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.button-4:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

.button-4:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.button-4:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.button-4:focus {
  outline: 1px transparent;
}

.button-4:before {
  display: none;
}

.button-4:-webkit-details-marker {
  display: none;
}
</style>

