<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    MenuIcon
  },
});
</script>

