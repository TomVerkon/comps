import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import produce from 'immer';

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_COUNT = "change-count";
const SUBMIT_COUNT = "submit-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // example of not using immer
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      // example of using immer
      state.count = state.count - 1;
      return;
    case CHANGE_COUNT:
      return { ...state, valueToAdd: action.payload };
    case SUBMIT_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
        valueToAdd: 0
      };
    default:
      return state;
  }
};


function CounterPage({ initialCount }) {

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    dispatch({
      type: CHANGE_COUNT,
      payload: isNaN(value) ? 0 : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIT_COUNT,
      payload: state.valueToAdd
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button> Add It!</Button>
      </form>
    </Panel >
  );
}

export default CounterPage;
