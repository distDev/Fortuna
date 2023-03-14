export const state = () => ({
  list: [],
  isOpen: false,
  shippingInfo: {
    cost: null,
    company: null,
  },
});

export const mutations = {
  // Добавление товара в корзину
  addToCart(state, payload) {
    // если товар с таким id есть в корзине, увеличиваем число
    if (state.list.find((e) => e.id === payload.id)) {
      let changeItem = state.list.map(
        (e) =>
          e.id === payload.id && {
            countInCart: e.countInCart++,
          }
      );
      // добавляем изменения в localStorage
      localStorage.setItem("cart", JSON.stringify(state.list));
      return changeItem;
    }

    // если товара с таким id нет в корзине - добавляет товар
    else {
      state.list.push({
        id: payload.id,
        price: payload.price,
        countInCart: 1,
      });
      // добавляем изменения в localStorage
      localStorage.setItem("cart", JSON.stringify(state.list));
    }
  },

  // Удаление из корзины
  removeFromCart(state, payload) {
    return (state.list = state.list.filter((e) => e.id !== payload.id));
  },

  setItems(state, payload) {
    return (state.list = payload);
  },

  // Увеличение числа товаров в корзине
  incrementCount(state, payload) {
    return state.list.map((e) => {
      if (e.id === payload.id) {
        return {
          countInCart: e.countInCart++,
        };
      }
    });
  },

  // Уменьшение числа товаров в корзине
  decrementCount(state, payload) {
    return state.list.map((e) => {
      if (e.id === payload.id) {
        return {
          countInCart: (e.countInCart -= 1),
        };
      }
    });
  },

  // Открытие/Закрытие корзины
  handleShowCart(state) {
    return (state.isOpen = !state.isOpen);
  },

  // Изменение цены доставки и компании
  handleChangeShippingCost(state, payload) {
    if (payload.info === "Почта России") {
      return (state.shippingInfo = {
        cost: 250,
        company: "Почта России",
      });
    }
    if (payload.info === "CDEK") {
      return (state.shippingInfo = {
        cost: 350,
        company: "CDEK",
      });
    }
  },
};

export const getters = {
  // Количество товаров в корзине
  getCartValue(state) {
    return state.list.length > 1
      ? state.list.map((e) => e.countInCart).reduce((a, b) => a + b)
      : state.list.length === 1
      ? Number(state.list.map((e) => e.countInCart).join(""))
      : 0;
  },

  // Сумма товаров в корзине
  getCartTotalPrice(state) {
    if (state.list.length > 1) {
      return Number(
        state.list
          .map((e) => e.countInCart * e.price)
          .reduce((acc, item) => acc + item)
      );
    }
    if (state.list.length === 1) {
      return Number(state.list.map((e) => e.price * e.countInCart).join(""));
    }

    return 0;
  },
};
