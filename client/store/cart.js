export const state = () => ({
  list: [],
  isOpen: false,
});

export const mutations = {
  // Добавление в корзину
  addToCart(state, payload) {
    // если товар с таким id есть в корзине - увеличивает число
    if (state.list.find((e) => e.variantId === payload.variantId)) {
      return state.list.map(
        (e) =>
          e.variantId === payload.variantId && {
            ...e,
            countInCart: e.countInCart++,
          }
      );
    }
    // если товара с таким id нет в корзине - добавляет товар
    else {
      state.list.push({
        id: payload.id,
        variantId: payload.variantId,
        price: Number(payload.price),
        size: payload.size,
        name: payload.name,
        countInCart: 1,
        totalCount: payload.totalCount,
        image: payload.image,
      });
    }
  },

  // Увеличение числа товаров в корзине
  incrementCount(state, payload) {
    return state.list.map((e) => {
      if (e.variantId === payload.variantId) {
        return {
          ...e,
          countInCart: e.countInCart++,
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
      ? state.list.reduce((a, b) => a.countInCart + b.countInCart)
      : state.list.length === 1
      ? Number(state.list.map((e) => e.countInCart).join(""))
      : 0;
  },
  // Сумма товаров в корзине *изменить
  getCartTotalPrice(state) {
    return state.list.length > 1
      ? state.list.reduce((a, b) => a.totalPrice + b.totalPrice)
      : state.list.length === 1
      ? Number(state.list.map((e) => e.totalPrice).join(""))
      : 0;
  },
};
