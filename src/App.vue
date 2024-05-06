<template >
  <header>
    <div class="top_bar w-1/2 m-0 pb-0">
      <div class="p-10 hidden m-0 "  >
          <Button type="button" class="p-0 bg-white" icon="pi pi-bars" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
          <Menu  ref="menu" id="overlay_menu" class="absolute text-xl" :model="items" :popup="true">
          <template #start class="top-2">
          </template>
          <template class="top-2" #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                  <span class="text-xl" :class="item.icon" />
                  <span class="ml-2 text-xl">{{ item.label }}</span>
              </a>
          </router-link>
          </template>
          </Menu>
      </div>
      <a class="p-8" :href="health_check_url()">
        <span @click="navigate" class="text-4xl">Roberto Alvarado</span>
      </a>
    </div>
  </header>
  <router-view class="flex justify-center p-0"/>

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
header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
};
span{
  text-align: left;
  font-weight: 500;
  font-weight: bold;
  align-self: center;
  text-align: left;
};

.top_bar{
  display: flex;
  align-items: center;
};

.p-menu{
  font-size: 5px;

};
.p-button{
  padding: 5px;
};
nav {
  position: relative;
  padding-top: 3em;
  padding-bottom: 3em;
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

@media only screen and (max-width: 600px) {
  .top_bar{
    width: 85%;
  };
};

</style>
<script setup lang="ts">
import {defineComponent,ref} from 'vue';
const hover = ref(false);
import Menu from 'primevue/menu'
import Button from 'primevue/button'
import { useRouter } from 'vue-router';

const router = useRouter();
const menu = ref();

const items = ref([
    {
        label: 'What do you want to see?',
        items: [ {
            label: 'Projects',
            icon: 'pi pi-sitemap',
            route: '/projects'
        },
        {
            label: 'Books',
            icon: 'pi pi-book',
            route: '/books'
        },
        {
            label: 'Blog',
            icon: 'pi pi-pencil',
            route: '/blog'
    },
        ]
    }
]);

const toggle = (event:any) => {
    menu.value.toggle(event);
};
const health_check_url = (data:string) =>{
    var url:string = window.location.href
    if(!url.includes("github")){
        return "/";
    }
    return "/portfolio_robdres";
}
</script>

