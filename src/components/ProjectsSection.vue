<script setup lang="ts">
  import { ref,defineComponent } from 'vue';
  import json from '@/resources/projects.json'
  import Card from 'primevue/card'

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function get_months(month:Number|undefined) {
    return months[Number(month)]
  }
  function openTab(link) {
    window.open(link, "_blank");
  }

</script>

<template>
  <div class="flex flex-col gap-2 pt-10 pb-10" >
    <div v-for="(exp, index) in json.experiences.slice(0,3)" :key="index" class="flex flex-row" @click="openTab(exp.github)">
      <main class="flex-row flex group">
        <section class="about z-10 h-80 flex flex-col justify-between items-center " :class="{'group-hover:-translate-x-36  duration-1000':`${exp.img}`!='none'}">
        <header class="title">
          <h1 class="text-2xl font-bold">{{exp?.name}}</h1>
          <div>
            <h2 id="place" class="font-bold text-xl">
              <p>{{exp?.time}}</p>
            </h2>
          </div>
        </header>
        <div class="p-5 text-2xl">
        {{exp?.description}}
        </div>
        <div class="flex flex-row content-between items-center justify-center  pl-5 text-3xl gap-5">
          <div  v-for="(ski,index) in exp.skills" :key="index">
            <i :class="'devicon-'+ski+'-plain'"></i>
          </div>
        </div>
      </section>
      <section class="text-3xl text-blue text-right z-0 items-center ">
        <div v-if="`${exp.img}`!='none'">
          <img :src="require(`../resources/${exp.img}`)" class="absolute h-56 object-cover translate-y-12 -translate-x-full group-hover:-translate-x-36 duration-1000" >
        </div>
      </section>
      </main>
    </div>
  </div>
</template>

<style lang="less">
.title{
  position: relative;
  display: flex;
  height: 2em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
};


#location{
  opacity: 0%;
  font-size: 0.8em;
  grid-row: 1;
  grid-column: 1;
  color: var(--primary-bg);
  border-radius: 10px;
  text-align: end;
  color: var(--primary-sc);
  transform: translatex(8em);
};

#business{
  grid-row: 1;
  grid-column: 1;
  padding: 3px;
};
.about:hover #location{
  opacity: 100%;
  transition: 1s opacity;

};

h2{
  font-weight: 500;
};

.about{
  position: relative;
  text-align: left;
  color: var(--primary-bg);
  border-radius: 10px;
  font-size: 1em;
  flex-direction: column;
  padding: 20px;
  background-color: var(--primary-sc);
  width:100%;
};

.title{
  display: flex;
  height: 2em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

};
.content{
  display: flex;
  height: 2em;
  flex-direction: row;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;

};

@media only screen and (max-width: 600px) {
  .my-header ,.experience{
    width: 85%; /* Change width for cellphones */
  }
  span{
    width: 90%; /* Change width for cellphones */
  };
};
#location{
  opacity: 0%;
  font-size: 0.8em;
  grid-row: 1;
  grid-column: 1;
  color: var(--primary-bg);
  border-radius: 10px;
  text-align: end;
  color: var(--primary-sc);
  transform: translateX(8em);
};

#business{
  grid-row: 1;
  grid-column: 1;
  padding: 3px;

};
.about:hover #location{
  opacity: 100%;
  transition: 1s opacity;

};

@media only screen and (max-width: 600px) {
  #date{
    display: none
  }
  * {
    font-size: 1em;
  }
  .card{
    width: 100%;
  };
};

</style>
