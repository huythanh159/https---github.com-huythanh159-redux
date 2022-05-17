import logo from './logo.svg';
import './App.css';
import React from "react";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"
import store from './redux/store';
function App(props) {
  const handleIncrease = () => {
    //event handler
    props.increaseCounter1();

    //fire actions
    // store.dispatch({
    //   type: "test thanh",
    //   payload: { "name": "abc" }
    // })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React of {props.abc} with id {props.testId}</h1>
        <div>Count: {props.count}</div>
        <button onClick={() => handleIncrease()}>Increase Count</button>
        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}

//map state(redux store) + props react
const mapStateToProps = state => {
  return {
    count: state.counter.count,
    abc: state.counter.name,
    testId: state.counter.id
  }
}
//map dispatch(redux) to props react
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter1: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
