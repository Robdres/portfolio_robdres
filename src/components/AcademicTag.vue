<script lang="ts">
  import { ref,defineComponent } from 'vue';
  export  default defineComponent({
    name: "AcademicTag",
    props: {
      exp:{
        type: Object,
      }
    },
    methods:{
      get_months,
    },
    data(){
      return events;
    }

  });
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function get_months(month:Number|undefined) {
    return months[Number(month)];
  }

  const events = ref([
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ]);
</script>

<template>
  <section class="about">
    <header class="title">
      <h1>{{exp?.name}}</h1>
      <div>
        <h2 id="place">
          <p id="business"> GPA: {{exp?.gpa}}</p>
        </h2>
      </div>
    </header>
    <footer>
      <p><strong>Where?: </strong> {{exp?.place}}</p>
      <p> {{exp?.skills.join(", ")}}</p>
    </footer>
  </section>
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
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>
