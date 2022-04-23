<template>
    <div>
        <h4>
            {{ cart.jokes.replaceAll(' ', '_') }}
        </h4>
    </div>
</template>

<script>
import {
  defineComponent,
} from "@vue/composition-api";
import { useCartStore } from "../store/cart";

export default defineComponent({
  name: 'Normal-joke',
  setup() {
    const cart = useCartStore();
    window.stores = { cart };
    return {
        cart
    }
  }
})
</script>