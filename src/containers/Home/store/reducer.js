const defaultState = { name: "Zhenlong Yuan", list: [] };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_LIST":
      const final = Object.assign({}, state, {
        list: action.list,
      });
      return final;
    default:
      return state;
  }
};

export { reducer };
