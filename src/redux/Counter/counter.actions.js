import { INCREMENT, DECREMENT, FETCH_USER_ERROR, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./counter.types";
import axios from "axios";
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

//start doing finish
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest());
        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : [];
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchUsersError());
        }
    }
}
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    }
}
export const fetchUsersError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}