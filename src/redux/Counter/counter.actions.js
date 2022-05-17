import { INCREMENT, DECREMENT } from "./counter.types";
export const increaseCounter = () => {
    return {
        type: INCREMENT,//name
        payload: { like: "buy milk", name: "thanh" }
    };
};
export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};