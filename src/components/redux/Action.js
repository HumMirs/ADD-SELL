import { ADD_COMP, ADD_PHONE, SELL_COMP, SELL_PHONE } from "./ActionNames";

export const addPhone = () => {
  return {
    type: ADD_PHONE,
    info: "One phone is added..",
  };
};
export const sellPhone = () => {
  return {
    type: SELL_PHONE,
    info: "One phone was sold out..",
  };
};
export const addComp = () => {
  return {
    type: ADD_COMP,
    info: "One computer is added..",
  };
};
export const sellComp = () => {
  return {
    type: SELL_COMP,
    info: "One computer was sold out..",
  };
};
