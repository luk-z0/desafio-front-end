<template>
  <header>
    <q-tabs v-model="tab" no-caps class="bg-orange text-white shadow-2">


      <router-link to='/'>
        <q-tab  name="Home" label="Home" />
      </router-link>

      <router-link to='/search'>
        <q-tab  name="Search" label="Search" />
      </router-link>

      <router-link to="/peoples">
        <q-tab name="Peoples" label="Peoples" />
      </router-link>

    </q-tabs>
  </header>
  <router-view></router-view>

</template>

<script setup>

</script>

