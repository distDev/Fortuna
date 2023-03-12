export const state = () => ({
  list: [],
  isOpen: false,
  shippingInfo: {
    cost: null,
    company: null,
  },
});

export const mutations = {
  // Добавление в корзину
  addToCart(state, payload) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // если товар с таким id есть в корзине - увеличивает число
    if (state.list.find((e) => e.id === payload.id)) {
      let findItem = cart.find((e) => e.id === payload.id);

      if (findItem) {
        let newCart = cart.map((e) =>
          e.id === payload.id ? { id: e.id, countInCart: e.countInCart + 1 } : e
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
      }

      // Добавляем товара в корзину, если его там нет
      return state.list.map(
        (e) =>
          e.id === payload.id && {
            countInCart: e.countInCart++,
          }
      );
    }
    // если товара с таким id нет в корзине - добавляет товар
    else {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart
            ? [...cart, { id: payload.id, countInCart: 1 }]
            : [{ id: payload.id, countInCart: 1 }]
        )
      );

      state.list.push({
        id: payload.id,
        countInCart: 1,
      });
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
