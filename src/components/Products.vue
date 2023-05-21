<template>
  <div class="mt-2" > 
    <div class="mb-3 d-flex justify-content-between align-items-center">
      <h2>Products</h2>
      <Button 
        color="btn-primary"
        content="Add product"
        @functionClick="$emit('showAddProductForm')"
      />
    </div>
    <Table :rows="data" :columns="columns">
      <template #actions="{ row }">
        <Button 
          color="btn-transparent"
          content="Add item"
          @functionClick="$emit('addItem', row.id)"
        />
        <Button 
          color="btn-transparent"
          content="Add all"
          @functionClick="$emit('addAll',row.id)"
        />
      </template>
    </Table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
import Table from './Table.vue';

defineProps(['data'])
defineEmits(['addItem', 'addAll','showAddProductForm'])

const columns = ref( [
        { title: 'Name', field: 'name' },
        { title: 'Description', field: 'description' },
        { title: 'Stock', field: 'stock' },
        { title: 'Price', field: 'price' },
      ])
</script>