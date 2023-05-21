<template>
  <nav class="navbar px-5 py-3">
  <div class="container-fluid d-flex justify-content-between align-items-center">
    <h4 class="fw-bold">Market Cart</h4>
    <div class="position-relative">
      <i class="fa-solid fa-cart-shopping fs-3"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge-custom rounded-pill bg-danger">
        {{ totalCartItems }}
      </span>
    </div>
  </div>
</nav>
</template>

<script setup>
defineProps({
  totalCartItems: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.navbar {
  background-color: var(--primary);
}

.badge-custom {
  font-size: 1em;
  color: var(--white);
  padding: 0.1em 0.4em !important;

}
</style>