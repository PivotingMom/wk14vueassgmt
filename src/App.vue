<template>
  <div id="app">
    <JokeButton />
    <NormalJoke v-if="cart.normal" />
    <LoudJoke v-if="cart.loud" />
    <SnakeJoke v-if="cart.snake" />
      <button @click="showJoke('loud')">Click to show as Loud Joke</button>
      <button @click="showJoke('normal')">Click to show as Normal Joke</button>
      <button @click="showJoke('snake')">Click to show as Snake Joke</button>
  </div>
</template>

<script>
import JokeButton from '@/components/JokeButton.vue'
import NormalJoke from '@/components/NormalJoke.vue'
import LoudJoke from '@/components/LoudJoke.vue'
import SnakeJoke from '@/components/SnakeJoke.vue'
import {
  defineComponent,
} from "@vue/composition-api";
import { useCartStore } from "./store/cart";
export default defineComponent({
  name: "App",
  components: {
    JokeButton,
    NormalJoke,
    LoudJoke,
    SnakeJoke
  },
  setup() {
    const cart = useCartStore();
    function showJoke(val) {
      cart.showJokeToUser(val)
    }
    window.stores = { cart };
    return {
        cart,
        showJoke
    }
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
