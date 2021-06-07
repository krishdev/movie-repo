<template>
    <div class="o-layout">
        <router-link :to="{ name: 'Dashboard'}">Back to all movies</router-link>
        <div class="c-Movie">
            <div class="c-Movie__item">
                <figure class="c-Movie__figure" :style="{backgroundImage: 'url('+movie.poster+')'}"></figure>
                <div class="c-Movie__desc">
                    <h2 class="c-Movie__title">{{movie.title}}</h2>
                    <div class="c-Movie-desc__addi">
                        <div><b>Rating: </b> {{movie.imdbRating}}</div>
                        <div><b>Year: </b> {{movie.year}}</div>
                        <div><b>Director: </b> {{movie.director}}</div>
                        <div><b>Gener: </b> {{movie.gener}}</div>
                        <p>{{movie.plot}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            movie: {
                title: '',
                imdbRating: '',
                gener: '',
                director: '',
                year: null,
                poster: '',
                plot: '',
                imdbID: ''
            }
        }
    },
    created () {
        const id = this.$route.params.id;
        const movie = this.$store.getters.getMovieById(id);
        if (movie.length === 0) {
            this.$store.dispatch('getMovieFromOMDB', id).then(res=>{
                this.movie = res;
            }).catch(()=>{
                alert('Error occurred')
            });
        } else {
            this.movie = movie[0];
        }
    }
}
</script>