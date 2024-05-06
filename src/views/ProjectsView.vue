<template>
  <div class="my_books">
    <MyBooks/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyBooks from '@/components/MyBooks.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'BooksView',
  components: {
    MyBooks
  },
});
</script>
