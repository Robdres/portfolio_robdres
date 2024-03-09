<script lang="ts">
import { defineComponent } from 'vue';
export  default defineComponent({
  name: "AcademicTag",
  props: {
    exp:{
      type: Object,
    }
  },
  methods:{
    get_months,
  }

});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function get_months(month:Number|undefined) {
  return months[Number(month)]
}
</script>

<template>
  <div class="about">
    <div class="title">
      <h1>{{exp?.name}}</h1>
      <div>
      <h2 id="place">
        <p id="business"> GPA: {{exp?.gpa}}</p>
      </h2>

      </div>
    </div>
    <p>{{exp?.place}}</p>
    <p>{{exp?.location}}</p>
    <p>{{exp?.skills}}</p>
  </div> </template> <style lang="less">
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
  * {
    font-size: 1em;
  }
};
</style>
