<template>
  <div class="home">
    <UrlShortenerForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import UrlShortenerForm from '@/components/UrlShortenerForm.vue';

export default {
  name: 'Home',
  components: {
    UrlShortenerForm,
  },
  mounted() {
    document.title = 'Url Shortener';
  },
};
</script>
