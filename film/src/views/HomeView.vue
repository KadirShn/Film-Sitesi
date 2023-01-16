<template>
  <div>
    <UpcomingMovies />
    <PopularMovies />
  </div>
</template>

<script>
  import PopularMovies from '@/components/PopularMovies.vue';
  import UpcomingMovies from '@/components/UpcomingMovies.vue';

  export default {
    name: "HomeView",
    components: {
      UpcomingMovies,
      PopularMovies
    }
  }
</script>