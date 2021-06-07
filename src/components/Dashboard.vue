<template>
    <div class="o-layout c-Dashboard">
        <ul class="c-All-movies">
            <li class="c-Movie" v-for="movie in listOfMovies" :key="movie.imdbID">
                <div class="c-Movie__item">
                    <figure class="c-Movie__figure" :style="{backgroundImage: 'url('+movie.poster+')'}"></figure>
                    <div class="c-Movie__desc">
                        <router-link :to="{ path: '/view-movie/'+movie.imdbID }"><h2 class="c-Movie__title">{{movie.title}}</h2></router-link>
                        <div class="c-Movie-desc__addi">
                            <div><b>Rating: </b> {{movie.imdbRating}}</div>
                            <div><b>Year: </b> {{movie.year}}</div>
                            <div><b>Director: </b> {{movie.director}}</div>
                            <div><b>Gener: </b> {{movie.gener}}</div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {allMovies} from '../assets/allMovies';
export default {
  name: 'Dashboard',
  data () {
    return {
      listOfMovies: allMovies
    }
  }
}
</script>