import axios from "axios";
import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (error) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error" });
    }
  };
};

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((json) => dispatch(json));
