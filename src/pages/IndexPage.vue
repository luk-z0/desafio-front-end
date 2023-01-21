<template>
  <H2>Página principal</H2>
</template>

<script>
import { api } from 'src/boot/axios'
import { defineComponent, onMounted } from 'vue'




export default {
  name: 'IndexPage',


  data() {
    return {
      // people: []
    }

  },

  mounted() {
    // this.getPeople()
  },


  methods: {

    // getPeople() {
    //   api.get("/people/")
    //     .then((response) => {
    //       this.people = response.data
    //       console.log(response.data);
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    // },



  }

}
</script>
