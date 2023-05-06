import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCashActionCreator } from "./store/cashReducer";
import { removeCustomerAction } from "./store/customerReducer";
import { addCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncAction/customers";

const App = () => {
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const dispatch = useDispatch();

  const addCash = (cash) => {
     dispatch(addCashActionCreator(cash)) 
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomers = (name) => {
    const customer = {
      id: Date.now(),
      name
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      {console.log(customers)}
      <button onClick={() => getCash(Number(prompt()))}>-</button>
      <button onClick={() => addCash(Number(prompt()))}>+</button>
      <button onClick={() => addCustomers(prompt())}>Add Customer</button>
      <button onClick={() => dispatch(fetchCustomers())}>Fetch Customers</button>

      <div>{cash}</div>
      <div className="customers">
        {customers.map(customer => 
        <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
      )}
      </div>
    </div>
  );
};

export default App;
