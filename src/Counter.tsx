import React from 'react';

function Counter() {
    const onIncrese = () => {
        console.log('+1')
    }
    const onDecrese = () => {
        console.log('-1')
    }
    return (
        <div>
            <h1>0</h1>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrese}>-1</button>
        </div>
    );
}

export default Counter;