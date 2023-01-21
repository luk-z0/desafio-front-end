<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">
  </q-page>
  <p>
    {{ people }}
  </p>
</template>

<script>
import { api } from 'src/boot/axios'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import { defineComponent, onMounted } from 'vue'

export default {
  name: 'IndexPage',


  data() {
    return {
      people: []
    }

  },

  mounted() {
    this.getPeople()
  },


  methods: {

    getPeople() {
      api.get("/people/1")
        .then((response) => {
          this.people = response.data
          console.log(response.data);
        }).catch((err) => {
          console.log(err);
        })
    }

  }

}
</script>
