<script lang="ts">

import { defineComponent,ref } from 'vue';
import ExperinceTag from '@/components/ExperinceTag.vue';
import AcademicTag from '@/components/AcademicTag.vue';
import ContactMeTag from '@/components/ContactMeTag.vue';
import Projects from '@/components/ProjectsSection.vue';
import Icons from '@/components/Icons.vue'
import Menu from 'primevue/menu'

const items = ref([
    {
        label: 'Projects',
        icon: 'pi pi-palette',
        route: '/projects'
    },
    {
        label: 'Books',
        icon: 'pi pi-palette',
        route: '/books'
    },
    {
        label: 'Blog',
        icon: 'pi pi-palette',
        route: '/blog'
    },
]);
export default defineComponent({
  name: 'HelloWorld',
  components:{
    ExperinceTag,
    AcademicTag,
    ContactMeTag,
    Projects,
    Icons,
    Menu
  },

});
</script>

<template>
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <main class="w-1/2  flex-col self-center">
        <div class="">
            <div class="flex justify-center content-center flex-row p-10">
                <div class="">
                    <p>
                        I'm a math major turned programmer with a focus on machine learning,
                        C++, and data science. In my free, time I like to learn about videogame
                        development
                    </p>
                </div>
                <img src="../../public/profile.png" alt="gekki">
            </div>
        </div>

        <span class="p-10">Contact Me</span>
        <br/>
        <em class="p-10 pb-20">Currently I am not searching for a job, but I am always open to participate in projects on which I could be helpful</em>
        <ContactMeTag/>
        <span class="p-10">Job Experiences</span>
        <ExperinceTag/>
        <span class="p-10">What I Know?</span>
        <Icons class="w-full p-10"/>
        <span class="p-10">Projects</span>
        <br/>
        <em class="p-10"> You can click on each one and see more information</em>
        <Projects/>
        <span class="p-10">Education</span>
        <AcademicTag/>
    </main>
</template>


<style scoped lang="less">

span{
  font-weight: bold;
  font-size: 2em;
  align-self: center;
  text-align: left;
};

p{
  font-size: 1.8em;
  text-align: left;
};

.main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  overflow: hidden;
};


@media only screen and (max-width: 600px) {
  .header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%; /* Change width for cellphones */
  }
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
