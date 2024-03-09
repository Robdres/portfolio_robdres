<template>
  <nav @mouseover="hover=true" @mouseleave="hover=false">
    <router-link to="/books" active-class="rountes_sh"><div :class="{routes_sh:hover,routes_dn:!hover}">Books</div></router-link> 
    <router-link to="/" id="main">R</router-link> 
    <router-link to="/blog"><div :class="{routes_sh:hover,routes_dn:!hover}">Blog </div></router-link>
  </nav>
  <router-view/>

</template>

<style lang="less">
@import '../assets/styles/variables.css';

#app {
  font-family: 'Protest Strike', sans-serif;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  position: relative;
  padding-top: 2em;
  padding-bottom: 2em;
  gap: 2em;
  display: flex;
  width: 1;
  height: 3vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .routes_dn{
    opacity: 0.0;
    transition: 0.3s;
    width: 100px;
  }

  .routes_sh {
    opacity: 1.0;
    width: 100px;
    transition: 0.3s;
    &.router-link-exact-active {
    width: 100px;
      color: var(--primary-dc);
      opacity: 100%;
    }
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-fg);
    text-align: center;
    font-size: min(max(16px, 4vw), 22px);
    width: 100px;

    &.router-link-exact-active {
      color: var(--primary-dc);
    width: 100px;
      text-align: center;
      opacity: 100%;
    }
  }
  #main{
      font-size: 2em;
      text-align: center;
      opacity: 1;
  }
}
@media (min-width: 992px) {
    nav {
        padding-left: 0;
    }
}
</style>
<script setup lang="ts">
import {ref} from 'vue';
const hover = ref(false);
</script>

