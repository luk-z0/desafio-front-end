<template>
  <CardComponent />
</template>

<script>
import { api } from 'src/boot/axios';
import CardComponent from './CardComponent.vue';


export default {
  name: "Peoples",
  components: {
    CardComponent
  },

  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      api.get("/people/")
        .then((response) => {
          this.peoples = response.data;
          console.log(response.data);
        }).catch((err) => {
          console.log(err);
        });
    }
  },
}
</script>

<style>

</style>
