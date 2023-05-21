<template>
  <div class="p-3 my-5 form-section">
    <form @submit.prevent="$emit('addProduct')">
      <h3 class=" mb-3 text-center">Add Product Form</h3>
      <div class="mb-3">
        <label for="name" class="form-label">Name of product</label>
        <input
          type="text"
          class="form-control"
          id="name"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
        >
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description of product</label>
        <input
          type="text"
          class="form-control"
          id="description"
          :value="description"
          @input="$emit('update:description', $event.target.value)"
        >
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price of product</label>
        <input
          type="text"
          class="form-control"
          id="price"
          :value="price"
          @input="$emit('update:price', checkNumber($event.target.value))"
          >
      </div>
      <div class="mb-3">
        <label for="stock" class="form-label">Stock of product</label>
        <input
          type="text"
          class="form-control"
          id="stock"
          :value="stock"
          @input="$emit('update:stock',  checkNumber($event.target.value))"
        >
      </div>
      <div class="d-flex gap-3">
        <Button
          color="btn-primary"
          content="Add Product"
          type="submit"
        />
        <Button
          color="btn-outline-secondary"
          content="Cancel"
          type="button"
          @functionClick="$emit('showAddProductForm')"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import Button from './Button.vue';

defineProps({
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number,
    default: 0
  }
})

const checkNumber = (value) => {
  if (value === '') {
    return 0;
  } else {
    return parseInt(value);
  }
}

defineEmits(['update:name', 'update:description', 'update:price', 'update:stock', 'addProduct', 'showAddProductForm'])

</script>

<style scoped>
  .form-section {
    width: 600px;
    margin: 0 auto;
    border: 1px solid var(--secondary);
    border-radius: 5px;
  }
</style>