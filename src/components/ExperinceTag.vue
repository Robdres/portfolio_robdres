<script setup lang="ts">
  import { ref,defineComponent } from 'vue';
  import json from '@/resources/exp.json'
  import Timeline from 'primevue/timeline'
  import Card from 'primevue/card'

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function get_months(month:Number|undefined) {
    return months[Number(month)]
  }
  const events = ref([
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 ', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ]);
</script>

<template>
   <div class="card w-1/2">
        <Timeline :value="events" align="alternate" class="customized-timeline">
           <template #opposite="slotProps">
                <small class="p-text-secondary p-10">{{slotProps.item.date}}</small>
            </template>
            <template #marker>
                <span class="flex w-5  h-5 align-items-center rounded-full justify-content-center align-items-center text-white border-circle z-1 shadow-1 bg-blue" >
                  <span class="text-xl text-center"></span>
                </span>
            </template>
            <template #content="slotProps">
                <Card class="mt-3 py-2">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-1" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                        <Button label="Read more" text></Button>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>
<style>

.p-timeline-event{
  padding:3px
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
  * {
    font-size: 1em;
  }
};

@media screen and (max-width: 650px) {
  .card{
    width : 100%;
    display: flex;
  }
  .p-timeline-event:nth-child(even) {
      flex-direction: row;

      text-align: right;
  }

  .p-timeline-event-opposite {
      flex: 0;
  }
}
</style>
