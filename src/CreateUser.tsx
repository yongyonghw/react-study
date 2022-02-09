import React, {useCallback, useContext, useRef} from 'react';
import {UserDispatch} from "./App";
import useInputs from "./hooks/useInputs";


type CreateUserType =
    {
        username:string, email:string, onCreate:any
    }


function CreateUser() {
    console.log('createuser')
    const dispatch = useContext(UserDispatch)
    // const { username, email, onCreate } = props
    const nextId = useRef(3);
    const [{username,email}, onChange, reset] = useInputs({username:'', email:''})

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
            <button onClick={
                () => {dispatch(
                    {
                        type: 'CREATE_USER',
                        user: {
                            username: username,
                            email: email,
                            id: ++ nextId.current
                        }
                    }
                )
                reset()
                }
            }>등록</button>
        </div>
    );
}

export default  React.memo(CreateUser);