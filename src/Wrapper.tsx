import React from 'react';
import Hello from "./Hello";

function Wrapper(
    // props: {children:any}
) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            <Hello name="react" color="red"/>
            <Hello color="pink" isSpecial/>
            {/*{props.children}*/}
        </div>
    )
}

export default Wrapper;