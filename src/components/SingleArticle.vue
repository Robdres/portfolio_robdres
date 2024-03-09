<template>
  <div class="article">
    <h1 style="font-size: 1em;">{{title}} ({{date}})</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Article',
  props:{
    title: String, 
    date: String,
    text: String,
  }

},

);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.article{
  text-align: left;
  width: 100%;
};
h1{
  text-align: left
};

</style>
