import { defineStore } from "pinia";
import axios from 'axios';

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    jokes: '',
    normal: false,
    loud: false,
    snake: false
  }),
  getters: {
        getJokes: (state) => {      
            return state.jokes;
        }
    },
  actions: {
    async purchaseItems() {
        await axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
        .then((response) => {
            this.jokes = response.data.joke
            this.normal = true
            this.loud = false
            this.snake = false
        })
        .catch((err) => console.log(err))
    },
    showJokeToUser(val) {
        if (val === 'loud') {
            this.loud = true
            this.snake = false
            this.normal = false
        } else if (val === 'snake') {
            this.snake = true
            this.loud = false
            this.normal = false
        } else {
            this.normal = true
            this.loud = false
            this.snake = false
        }
    }
  }
});