<template>
  <div>
      <CardComponent :peoples="peoples"> </CardComponent>
  </div>
</template>

<script>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import CardComponent from './CardComponent.vue';

export default {
  name: "Peoples",

  components: {
    CardComponent
  },

  setup() {
    let peoples = ref([]);

    function getPeople() {
      api.get("/people/")
        .then((response) => {
          peoples.value = response.data.results;
          console.log(response.data.results);
        }).catch((err) => {
          console.log(err);
        });
    }
    onMounted(getPeople)

    return {
      peoples
    }
  }
}


</script>
