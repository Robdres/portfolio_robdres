<template> 
<div class="main">
  <div class="header">
    <h1>Blog</h1>
    <p>This blog is just a recollection of ideas that I think about, 
      it shows my personal views and nothing else. If you feel offended I love to 
      talk with everyone and understand their view, my email is at the end so feel 
      free to contact me. This blog is to keep what I learned
    </p>
    <p style="font-size: small;">
      PD: I write in English and Spanish, in the future I'll add something to distinguish
      between them
    </p>
    <div v-for="(art,index) in json" :key="index" class="articles">
      <SingleArticle :title="art.title" :date="art.date" :text="art.text"/>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';
import SingleArticle from '@/components/SingleArticle.vue'
import articles_json from '@/resources/blog.json'


export default defineComponent({
  name: 'AboutView',
  components:{
    SingleArticle
  },
  data() {
    return {
      json: articles_json.articles
    }
  },

});

</script>
<style lang="less">
.main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
};

.header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  max-width: 80%;
  width: 50%;
};

h1{
  text-align: center
};
.articles{
  width: 100%
};
</style>
