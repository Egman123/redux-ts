import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from '../store/action-creator/index';

export const useActions = () => {
    const dispatch = useDispatch();
    console.log(ActionCreators);
    return bindActionCreators(ActionCreators, dispatch)
}