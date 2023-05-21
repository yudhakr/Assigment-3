import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../view/ProductsView.vue"
import CartView from "../view/CartView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "ProductsView",
      component: ProductsView,
    },
    {
      path: "/cart",
      name: "CartView",
      component: CartView,
    },
  ],
});

export default router;
