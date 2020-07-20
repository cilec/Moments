export default {
  namespace: "post",
  state: {
    num: 0,
  },
  reducers: {
    get: (state, { payload }) => {},
    add: (state, { payload }) => {
      state.num++;
    },
  },
  effects: {},
};
