<template>
    <nav>
        <v-app-bar app color="#440b59" dark>
            <v-icon color="#f9d4fa" class="mr-2">fas fa-video</v-icon>
            <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">KEF FILM</v-toolbar-title>
            <v-btn text class="ml-2" to="/">Filmler</v-btn>
            <v-btn text class="ml-2" to="/actors">Oyuncular</v-btn>
            <v-spacer></v-spacer>
            <v-autocomplete clearable hide-no-data hide-selected color="#f9d4fa" prepend-inner-icon="search" flat
                :items="movies" item-text="title" item-value="id" id="search">
                <template v-slot:item="{item}">
                    <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
                </template>
            </v-autocomplete>
            <v-btn icon>
                <v-badge color="green" content="12" overlap>
                    <v-icon color="#f9d4fa">far fa-bell</v-icon>
                </v-badge>
            </v-btn>
            <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
                <v-avatar size="40">
                    <v-img src="https://avatars.githubusercontent.com/u/99869817?v=4"></v-img>
                </v-avatar>
            </v-badge>
        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            model: '',
            search: null,
            movies: []
        }),
        mounted() {
            this.loadMovies();
        },
        methods: {
            loadMovies: async function () {
                try {
                    const response = await this.$http.get("/movie/popular");
                    this.movies = response.data.results;

                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style>
</style>