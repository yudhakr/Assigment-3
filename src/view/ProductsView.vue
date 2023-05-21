<template>
  <Transition name="fade">
      <AddProductForm
        @showAddProductForm="showAddProductForm"
        v-if="addForm"
        v-model:name="addFormData.name"
        v-model:description="addFormData.description"
        v-model:price="addFormData.price"
        v-model:stock="addFormData.stock"
        @addProduct="addProduct"
      />
    </Transition>
    <Products 
      :data="availableProducts" 
      @addItem="addOneItem" 
      @addAll="addAllItem"
      @showAddProductForm="showAddProductForm"
    />
    <div class="mt-5">
      <RouterLink to="/cart">
        <Button
          color="btn-outline-secondary"
          content="Go to cart page"
        />
      </RouterLink>
    </div>
</template>

<script setup>
import Products from '../components/Products.vue';
import AddProductForm from '../components/AddProductForm.vue';
import Button from '../components/Button.vue';
import { useStore } from 'vuex';
import { Transition, computed, ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';

const store = useStore();


const availableProducts = computed(() => store.getters.availableProducts);

const addForm = ref(false)

const showAddProductForm = () => {
  addForm.value = !addForm.value
}

const addFormData = reactive({
  id: Math.floor(Math.random() * 1000),
  name: '',
  description: '',
  stock: 0,
  price: 0
})

const addProduct = () => {
  store.commit('addProduct',addFormData)
  addForm.value = false
}

const addOneItem = (id) => {
  store.commit('addOneItem',id)
}

const addAllItem = (id) => {
  store.commit('addAllItem',id)
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
