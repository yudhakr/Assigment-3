import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Indomie Kari Ayam",
          description: "Mie Instan",
          stock: 10,
          price: 3900,
        },
        {
          id: 2,
          name: "Indomie Goreng",
          description: "Mie instan ",
          stock: 10,
          price: 1500,
        },
        {
          id: 3,
          name: "Sarimi",
          description: "Mie instan isi 2",
          stock: 20,
          price: 10000,
        },
      ],
      cart: [],
    };
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },

    addOneItem(state, id) {
      const product = state.products.find((product) => product.id === id);
      if (product.stock > 0) {
        product.stock -= 1;
        const item = state.cart.find((item) => item.id === id);
        if (item) {
          item.stock += 1;
          item.price = item.stock * product.price;
        } else {
          state.cart.push({
            id: product.id,
            name: product.name,
            stock: 1,
            price: product.price,
          });
        }
      }
    },
    addAllItem(state, id) {
      const product = state.products.find((product) => product.id === id);
      if (product.stock > 0) {
        const item = state.cart.find((item) => item.id === id);
        if (item) {
          item.stock += product.stock;
          item.price = item.stock * product.price;
        } else {
          state.cart.push({
            id: product.id,
            name: product.name,
            stock: product.stock,
            price: product.price * product.stock,
          });
        }

        product.stock = 0;
      }
    },
    deleteOneItemCart(state, id) {
      const product = state.products.find((product) => product.id === id);
      const item = state.cart.find((item) => item.id === id);
      item.stock -= 1;
      product.stock += 1;
      item.price = item.stock * product.price;
    },
    deleteAllItemCart(state, id) {
      const product = state.products.find((product) => product.id === id);
      const item = state.cart.find((item) => item.id === id);
      product.stock += item.stock;
      item.stock = 0;
      item.price = item.stock * product.price;
    },
  },
  actions: {},
  getters: {
    availableProducts(state) {
      return state.products.filter((product) => product.stock > 0);
    },
    availableCart(state) {
      return state.cart.filter((product) => product.stock > 0);
    },
    totalItemCart(state) {
      return state.cart.reduce((total, item) => total + item.stock, 0);
    },
    totalPriceCart(state) {
      return state.cart.reduce((total, item) => total + item.price, 0);
    },
  },
});

export default store;
