<template>
  <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
  <div class="main">
    <span>Roberto Alvarado </span>
    <div :class="{header:true}">
      <div class="text not_clicked">
        <p>I'm a math major turned programmer with a focus on machine learning,
          C++, and data science. In my free time I like to learn about videogame
          development
        </p>
        <p class="clicked">
          I'm a math major turned programmer with a focus on machine learning,
          C++, and data science. I enjoy unraveling complex problems, leveraging
          my mathematical background to develop practical solutions.
          Proficient in algorithm development and data analysis, I thrive in collaborative
          environments where I can apply my skills to drive innovation. With a
          passion for continuous learning, I'm eager to contribute to impactful
          projects in the realm of machine learning and beyond.</p>
      </div>
    <img src="../../public/profile.png" alt="gekki">

    </div>
    <span>What I Know?</span>
    <Icons/>

    <span>Job Experiences</span>
    <div v-for="(experience, index) in json" :key="index" class="experience">
      <ExperinceTag :exp="experience"/>
    </div>
    <span>Education</span>
    <div v-for="(experience, index) in json_stu" :key="index" class="experience">
      <AcademicTag :exp="experience"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExperinceTag from '@/components/ExperinceTag.vue';
import AcademicTag from '@/components/AcademicTag.vue';
import Icons from '@/components/Icons.vue'
import json from '@/resources/exp.json'
import json_stu from '@/resources/stu.json'
 
export default defineComponent({
  name: 'HelloWorld',
  components:{
    ExperinceTag,
    AcademicTag,
    Icons
},
  data(){
    return {
      json : json.experiences,
      json_stu:json_stu.experiences
    };
  }
});
</script>

<style scoped lang="less">

span{
  font-weight: bold;
  font-size: 2em;
  align-self: center;
  text-align: left;
  padding: 30px;
  width: 50%;
};

p{
  font-size: 2em;
};

.main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  overflow: hidden;
};

.header{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  max-width: 80%;
  width: 50%;
  .clicked{
    display:none;
  }

};

@media only screen and (max-width: 600px) {
  .header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%; /* Change width for cellphones */
  }
  img{
    padding-bottom: 10px;
  };
};

.experience{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  width: 50%;
}
@media only screen and (max-width: 600px) {
  .my-header ,.experience{
    width: 85%; /* Change width for cellphones */
  }
  span{
    width: 90%; /* Change width for cellphones */
  };
};

.text{
  position: relative;
  text-align: left;
  color: var(--primary-fg);
  font-size: 0.8em;
  flex-direction: column;
};

img{
  border-radius: 50%;
  height: 10em;
  width: 10em;
  -webkit-filter: blur(0);
  filter: blur(0);
};
img:hover{
  transition:0.2s;
  -webkit-filter: blur(2px);
  filter: blur(2px);
  
};

</style>
