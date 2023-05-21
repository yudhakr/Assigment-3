<template>
  <div class="mb-5">
    <RouterLink to="/">
      <Button
        color="btn-outline-secondary"
        content="Go to home page"
      />
    </RouterLink>
  </div>
  <Cart 
    :data="availableCart" 
    @deleteItem="deleteItem" 
    @deleteAll="deleteAllItem"
    @checkout="checkout"
    :totalPrice="totalPriceCart"
  />
</template>

<script setup>
import Cart from '../components/Cart.vue';
import Button from '../components/Button.vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import Swal from 'sweetalert2'


const store = useStore();

const availableCart = computed(() => store.getters.availableCart);
const totalPriceCart = computed(() => store.getters.totalPriceCart);

const deleteItem = (id) => {
  store.commit('deleteOneItemCart',id)
}

const deleteAllItem = (id) => {
  store.commit('deleteAllItemCart',id)
}

const checkout = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: `You will checkout your cart with total price Rp. ${totalPriceCart.value}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, checkout!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Checkout!',
        'Your cart has been checkout. Click OK to reload page.',
        'success'
        ).then((result) => {
          if (result.isConfirmed) {
            location.reload()
          }
        }) 
    }
  })
}

</script>