export const state = () => ({
  list: [
    {
      countInCart: 1,
      id: "12421fegweg",
      image: "https://ir.ozone.ru/s3/multimedia-i/wc1000/6384659802.jpg",
      name: "Сумка женская AFINA кросс боди через плечо",
      price: 2121,
      size: "S",
      totalCount: 5,
    },
  ],
  isOpen: false,
  shippingInfo: {
    cost: null,
    company: null,
  },
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
