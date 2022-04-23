<template>
    <div>
        <h4>
            {{ cart.jokes }}
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
    window.store = { cart };
    return {
        cart
    }
  }
})
</script>