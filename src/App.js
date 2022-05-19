import logo from './logo.svg';
// import './App.css';
import React from "react";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"

import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Home from './components/Home';
function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector(
    (state) => {
      return state.counter.count;
    }
  );
  const newName = useSelector(
    (state) => {
      return state.counter.name;
    }
  );
  const newID = useSelector((state) => {
    return state.counter.id;
  })
  const handleIncrease = () => {
    //event handler
    // props.increaseCounter1();
    dispatch(increaseCounter());
    //fire actions
    // store.dispatch({
    //   type: "test thanh",
    //   payload: { "name": "abc" }
    // })
  }
  // const handleDecrease = () => {
  //   dispatch(decreaseCounter());
  // }

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    console.log(">>>>check data axios", res);
  }
  useEffect(() => {
    fetchAllUser();
  }, [])
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React of {newName} with id {newID}</h1>
    //     <div>Count: {newCount}</div>
    //     <button onClick={() => handleIncrease()}>Increase Count</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header> */}

    // </div>
    <Home />

  );
}

// //map state(redux store) + props react
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     abc: state.counter.name,
//     testId: state.counter.id
//   }
// }
// //map dispatch(redux) to props react
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter1: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
