export const state = () => ({
  list: [],
  isOpen: false,
});

export const mutations = {
  // Добавление в корзину
  addToCart(state, payload) {
    // если товар с таким id есть в корзине - увеличивает число
    if (state.list.find((e) => e.id === payload.id)) {
      return state.list.map(
        (e) =>
          e.id === payload.id && {
            countInCart: e.countInCart++,
          }
      );
    }
    // если товара с таким id нет в корзине - добавляет товар
    else {
      state.list.push({
        id: payload.id,
        price: Number(payload.price),
        size: payload.size,
        name: payload.name,
        countInCart: 1,
        totalCount: Number(payload.totalCount),
        image: payload.image,
      });
    }
  },

  // Удаление из корзины
  removeFromCart(state, payload) {
    return (state.list = state.list.filter((e) => e.id !== payload.id));
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
    return state.list.length > 1
      ? Number(
          state.list
            .map((e) => e.countInCart * e.price)
            .reduce((acc, item) => acc + item)
        )
      : state.list.length === 1
      ? Number(state.list.map((e) => e.price * e.countInCart).join(""))
      : 0;
  },
};
