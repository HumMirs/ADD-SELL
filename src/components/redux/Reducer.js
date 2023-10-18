import { ADD_COMP, ADD_PHONE, SELL_COMP, SELL_PHONE } from "./ActionNames";

const initial_state = {
  phone_price: 2000,
  comp_price: 3000,
  phone_count: 5,
  comp_count: 3,
  total_income: 0,
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_PHONE:
      return state.phone_count < 15
        ? {
            ...state,
            phone_count: state.phone_count + 1,
          }
        : state;
    case ADD_COMP:
      return state.comp_count < 10
        ? {
            ...state,
            comp_count: state.comp_count + 1,
          }
        : state;
    case SELL_PHONE:
      return state.comp_count > 0
        ? {
            ...state,
            phone_count: state.phone_count - 1,
            total_income: state.total_income + state.phone_price,
          }
        : state;
    case SELL_COMP:
      return state.comp_count > 0
        ? {
            ...state,
            comp_count: state.comp_count - 1,
            total_income: state.total_income + state.comp_price,
          }
        : state;
    default:
      return state;
  }
};

export default reducer;
