<template>
  <div>
    <button @click="generateJokeFromApi">Generate new joke</button>
  </div>
</template>

<script>
import {
  defineComponent,
} from "@vue/composition-api";
import { useCartStore } from "../store/cart";

export default defineComponent({
  name: 'Joke-button',
  setup() {
    const cart = useCartStore();

    function generateJokeFromApi() {
      cart.purchaseItems();
    }

    return {
      generateJokeFromApi
    };
  }
})
</script>