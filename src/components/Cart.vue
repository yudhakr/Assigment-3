<template>
  <div class="mt-5">
    <h2 class="mb-3">Cart</h2>
    <Table :rows="data" :columns="columns">
      <template #actions="{ row }">
        <Button 
          color="btn-danger"
          content="Delete item"
          @functionClick="$emit('deleteItem', row.id)"
        />
        <Button 
          color="btn-danger"
          content="Delete all"
          @functionClick="$emit('deleteAll', row.id)"
        />
      </template>
    </Table>  
    <div class="mt-2">
      <p>Total Price: Rp.{{ totalPrice }}</p>
    </div>

    <div class="mt-5" v-if="data.length > 0">
      <Button 
        color="btn-primary"
        content="Checkout"
        @functionClick="$emit('checkout')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Table from './Table.vue';
import Button from './Button.vue';

defineProps({
  data: {
    type: Array,
  },
  totalPrice: {
    type: Number,
  }
})
defineEmits(['deleteItem', 'deleteAll', 'checkout'])

const columns = ref( [
        { title: 'Name', field: 'name' },
        { title: 'Stock', field: 'stock' },
        { title: 'Price', field: 'price' },
      ])
</script>