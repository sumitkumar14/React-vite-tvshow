import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";
import Button from 'react-bootstrap/Button';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button variant="success" onClick={() => dispatch(increment())}>Increment</Button>
      <Button variant="danger" onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}

export default Counter;