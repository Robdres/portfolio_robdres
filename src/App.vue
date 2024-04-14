<template >
  <header>
    <div class="top_bar">
    <span>Roberto Alvarado </span>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
        <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
        </a>
        </template>
        </Menu>
    </div>
    </div>
  </header>
  <router-view/>

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
  font-size: 2em;
  align-self: center;
  text-align: left;
};

.top_bar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 50%;
};

.p-menu{
  font-size: 5px;

};
.p-button{
  padding: 5px;
};
.card {
    background: var(--surface-card);
    padding: 2rem;
}
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
        label: 'Options',
        items: [ {
            label: 'Projects',
            icon: 'pi pi-palette',
            route: '/books'
        },
        {
            label: 'Books',
            icon: 'pi pi-palette',
            route: '/'
        },
        {
            label: 'Blog',
            icon: 'pi pi-palette',
            route: '/blog'
    },
        ]
    }
]);

const toggle = (event:any) => {
    menu.value.toggle(event);
};

</script>

