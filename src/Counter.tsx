import {useReducer, useState} from "react";


function reducer(state:any, action:any) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {

    // const [number, setNumber] = useState(0);
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrese = () => {
        // setNumber(number + 1);
        dispatch({type:'INCREMENT'});
    };
    const onDecrese = () => {
        dispatch({type: 'DECREMENT'});
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+</button>
            <button onClick={onDecrese}>-</button>
        </div>
    );
}

export default Counter;