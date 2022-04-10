import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";
const Counter = () => {
  const showCounter = useSelector(state => state.showCounter);
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    console.log("toggleCounter...");
    dispatch(counterActions.toggleCounter());
  };
  const increment5CountHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const incrementCountHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementCountHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={incrementCountHandler}>increment</button>
        <button onClick={increment5CountHandler}>increment By 5</button>
        <button onClick={decrementCountHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
