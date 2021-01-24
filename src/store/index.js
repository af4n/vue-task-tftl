import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    setPeople: (state, people) => {
      state.people = people
    }
  },
  actions: {
    getPeople({commit}) {
      return axios('https://swapi.dev/api/people/', {
        method: 'GET'
      })
        .then((people) => {
          commit('setPeople', people.data.results)
          console.log(people.data.results)
          return people
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    people(state) {
      return state.people
    }
  }
})
