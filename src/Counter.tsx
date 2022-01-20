import {useState} from "react";

function Counter() {

    const [number, setNumber] = useState(0);

    const onIncrese = () => {
        setNumber(number + 1);
    }
    const onDecrese = () => {
        setNumber(number -1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+</button>
            <button onClick={onDecrese}>-</button>
        </div>
    );
}

export default Counter;