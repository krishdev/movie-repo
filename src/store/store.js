import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import {
    apiKey,
    getOmdbUrl
} from "../assets/helper-functions";

Vue.use(Vuex)
Vue.use(VueResource);

export const store = new Vuex.Store({
    state: {
        movies: []
    },
    mutations: {
        change(state, movie) {
            // debugger;
            const isMoviePresent = state.movies.filter(item => item.imdbID == movie.imdbID);
            if (isMoviePresent && isMoviePresent.length === 0) {
                state.movies.push(movie);
            }
        }
    },
    actions: {
        getMovieFromOMDB({commit},id) {
            return new Promise((resolve, reject) => {
            Vue.http.get(getOmdbUrl(id)).then(res => {
                    const respondBody = res.body;
                    if (respondBody.imdbID) {
                        const movie = {
                            title: respondBody.Title,
                            imdbRating: respondBody.imdbRating,
                            gener: respondBody.Genre,
                            director: respondBody.Director,
                            year: respondBody.Year,
                            plot: respondBody.Plot,
                            poster: respondBody.Poster,
                            imdbID: respondBody.imdbID
                        };
                        commit('change', movie);
                        resolve(movie);
                    }
                })
            })
        }
    },
    getters: {
        movies: state => state.movies,
        getMovieById: state => {
            return id => state.movies.filter(item => item.imdbID === id)
        }
    }
})