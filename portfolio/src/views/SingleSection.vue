<template>
  <div class="about">
    <h1>{name}</h1>
    <h2>{place}</h2>
    <p>{date_ini}-{date_end}</p>
    <p v-if="description!=''">{description}</p>
      <v-icon
        size="large"
        color="green-darken-2"
        icon="mdi-domain"
      ></v-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export  default defineComponent({
  name: "ExperienceTag",
  props:{
    name: String,
    place: String,
    data_ini: Date,
    data_end: Date,
    description: String,
    icons: Array,
  }
});

</script>
