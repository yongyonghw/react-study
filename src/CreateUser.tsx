import React, {useCallback, useContext} from 'react';
import {UserDispatch} from "./App";


type CreateUserType =
    {
        username:string, email:string, onCreate:any
    }


function CreateUser(props:CreateUserType) {
    console.log('createuser')
    const dispatch = useContext(UserDispatch)
    const { username, email, onCreate } = props

    const onChange = (e:any) => {
        const { name, value } = e.target;
        dispatch( {
            type: 'CHANGE_INPUT',
            name,value
        });
    }

    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default  React.memo(CreateUser);