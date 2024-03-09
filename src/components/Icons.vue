<template>
  <div class="icons">
    <i class="devicon-cplusplus-plain"></i>
    <i class="devicon-python-plain"></i>
    <i class="devicon-javascript-plain"></i>
  </div>
  <div class="icons_secon">
    <i class="devicon-vim-plain"></i>
    <i class="devicon-archlinux-plain"></i>
    <i class="devicon-rust-plain"></i>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icons',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.icons{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-bottom:4px;

  i{
    font-size:5em;
    background-color: var(--primary-sc);
    border-radius: 10%;
    color: var(--primary-bg);
    padding: 5px;
    margin: 4px;
  };
};

.icons_secon{
  i{
    font-size:4em;
    background-color: var(--primary-sc);
    border-radius: 10%;
    color: var(--primary-bg);
    padding: 5px;
    margin: 4px;
  };
};

</style>
