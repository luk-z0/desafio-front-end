<template>
  <header>
    <q-tabs v-model="tab" no-caps class="bg-orange text-white shadow-2">
      <router-link to='/search'>
        <q-tab name="Search" label="Search" />
      </router-link>
      <router-link to="/peoples">
        <q-tab name="Peoples" label="Peoples" />
      </router-link>
      <q-tab name="movies" label="Movies" />
    </q-tabs>
  </header>
  <router-view></router-view>

</template>

<script setup>
</script>

