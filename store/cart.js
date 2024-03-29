export const state = () => ({
  list: [],
  isOpen: false,
  shippingInfo: {
    cost: 0,
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
        name: payload.name,
        price: payload.price,
        size: payload.size,
        image: payload.image,
        countInCart: 1,
      });

      // добавляем изменения в localStorage
      localStorage.setItem("cart", JSON.stringify(state.list));
    }
  },

  // Удаление из корзины
  removeFromCart(state, payload) {
    let removeItem = (state.list = state.list.filter(
      (e) => e.id !== payload.id
    ));

    // добавляем изменения в localStorage
    localStorage.setItem("cart", JSON.stringify(state.list));
    return removeItem;
  },

  // Очистка корзины
  clearCart(state, payload) {
    let clear = () => {
      return (
        (state.list = []),
        (state.shippingInfo = {
          cost: null,
          company: null,
        })
      );
    };

    // добавляем изменения в localStorage
    localStorage.removeItem("cart");

    return clear();
  },

  // Уменьшение числа товаров в корзине
  decrementCount(state, payload) {
    let decrementItem = state.list.map((e) => {
      if (e.id === payload.id) {
        return {
          countInCart: (e.countInCart -= 1),
        };
      }
    });

    // добавляем изменения в localStorage
    localStorage.setItem("cart", JSON.stringify(state.list));
    return decrementItem;
  },

  // Добавление totalCount товарам
  combineProducts(state, payload) {
    // получение id доступных товаров
    let itemsId = payload.cartData.data.map((e) => ({
      id: e.id,
      totalCount: e.attributes.totalCount,
    }));

    // фильтрация по id товаров
    let filteredItems = state.list.filter((e) =>
      itemsId.some((item) => item.id === e.id)
    );

    // добавление totalCount товарам из vuex store
    let mergedProduct = filteredItems.map((e) => {
      let totalCount = itemsId.find((item) => item.id === e.id).totalCount;
      let countInCart =
        e.countInCart < 1
          ? (e.countInCart += 1)
          : e.countInCart > totalCount
          ? totalCount
          : e.countInCart;

      return {
        ...e,
        countInCart,
        totalCount,
      };
    });

    return (
      (state.list = mergedProduct),
      localStorage.setItem("cart", JSON.stringify(state.list))
    );
  },

  // Добавление товаров в store
  setItems(state, payload) {
    return (state.list = payload);
  },

  // Открытие/Закрытие корзины
  handleShowCart(state) {
    return (state.isOpen = !state.isOpen);
  },

  // Изменение цены доставки и компании
  handleChangeShippingCost(state, payload) {
    return (state.shippingInfo = {
      cost: payload.cost,
      company: payload.company,
    });
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
      return Number(state.list.map((e) => e.countInCart * e.price).join(""));
    }
    return 0;
  },
};
