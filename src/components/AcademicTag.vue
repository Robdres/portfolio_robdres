<script setup lang="ts">
  import json from '@/resources/stu.json'
  import Timeline from 'primevue/timeline'
  import Card from 'primevue/card'

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function get_months(month:Number|undefined) {
    return months[Number(month)]
  }
</script>

<template>
  <div class="flex flex-col gap-2 pt-10 pb-10">
    <div v-for="(exp, index) in json.experiences" :key="index" class="">
      <section class="about">
        <header class="title">
          <h1 class="text-2xl font-bold">{{exp?.name}}</h1>
          <div>
            <h2 id="place" class="font-bold text-xl">
              <p>{{exp?.place}}</p>
            </h2>
          </div>
        </header>
        <div class="p-5 text-2xl">
        {{exp?.gpa}}
        </div>
        <div class="flex flex-row pl-5  gap-5">
          <div  v-for="(ski,index) in exp.skills" :key="index">
            <p>{{ski}}</p>
          </div>
        </div>
      </section>
    </div>
  </div>

</template> 

<style lang="less">
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
  position: relative;
  display: flex;
  height: 2em;
  flex-direction: row;
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
#place{
  display: grid;
  text-align: end;
};

@media only screen and (max-width: 600px) {
  #date{
    display: none
  }
  p{
    font-size: 12px;
  };
};
</style>
