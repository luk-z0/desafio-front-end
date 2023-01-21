<template>
  <div class="container">
    <div v-for="(people, i) in peoples" :key="i" class="card-person">
      <div>
        <p> Name : {{ people.name }}</p>
        <p> Height : {{ people.height }}</p>
        <p> Mass : {{ people.mass }}</p>
        <p> Hair Color : {{ people.hair_color }}</p>
        <p> Skin Color : {{ people.skin_color }}</p>
        <p> Eye Color : {{ people.eye_color }}</p>
        <p> Birth Year : {{ people.birth_year }}</p>
        <p> Gender : {{ people.gender }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['peoples'],

  setup() {
    return {}
  }

}
</script>

<style>
.card-person {
  width: 400px;
  padding: 24px;
  margin: 25px;
  border-radius: 10px;
  font-size: 25px;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  background: rgba(212, 212, 207, 1);
}
</style>

