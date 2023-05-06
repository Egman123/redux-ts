import axios from "axios";
import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos= (page=1, limit=10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS});
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos", {
            params: {_page: page, _limit: limit}
        }
      );
      setTimeout(() => {
        dispatch({
           type: TodoActionTypes.FETCH_TODOS_SUCEESS,
           payload: response.data
        });
      }, 500);
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "Error todo" });
    }
  };
};

export function setTodoPage(page:number):TodoAction {
   return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}