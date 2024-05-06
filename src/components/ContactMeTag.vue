<script setup lang="ts">
  import { ref,defineComponent } from 'vue';

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function get_months(month:Number|undefined) {
    return months[Number(month)]
  }

  function openTab(link) {
    window.open(link, "_blank");
  }

  function copy_clipboard(value) {
      navigator.clipboard.writeText(value);
      alert("Copied to clipboard " + value);
  }

</script>

<template>
    <article class="flex flex-row gap-2 items-center justify-evenly  w-full p-10" >
        <div class=" transition p-4 bg-white border-blue border-2 hover:bg-blue hover:text-white duration-100" @click="openTab('https://github.com/Robdres')">
            <span class="text-3xl" :class="'pi pi-github'"/>
        </div>
        <div class=" transition p-4 bg-white border-blue border-2 hover:bg-blue hover:text-white duration-100" @click="copy_clipboard('raalvaradom@hotmail.com')">
            <span class="text-3xl" :class="'pi pi-envelope'"/>
        </div>
        <div class=" transition p-4 bg-white border-blue border-2 hover:bg-blue hover:text-white duration-100" @click="openTab('https://twitter.com/Robdre3')">
            <i class="text-3xl devicon-twitter-plain"></i>
        </div>
        <div class=" transition p-4 bg-white border-blue border-2 hover:bg-blue hover:text-white duration-100" @click="openTab('https://github.com/Robdres/CV/blob/main/cv_en/cv.pdf')">
            <p class="text-3xl">CV</p>
        </div>
    </article>
</template>

<style lang="less">

</style>
