export const state = () => ({
  url: "",
  isOpen: false,
});

export const mutations = {
  handleShow(state, payload) {
    state.isOpen = !state.isOpen;
    if(payload.url) {
     state.url = payload.url;
    }
  },
};
