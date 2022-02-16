import React, {useCallback, useContext, useRef} from 'react';
import {UserDispatch} from "./App";
import useInputs from "./hooks/useInputs";
import ErrorBound from "./ErrorBound";


type CreateUserType =
    {
        username: string, email: string, onCreate: any
    }


function CreateUser() {
    const dispatch = useContext(UserDispatch)
    // const { username, email, onCreate } = props
    const nextId = useRef(3);
    const [{username, email}, onChange, reset] = useInputs({username: '', email: ''})

    return (
        <div>
            <ErrorBound>
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
                    () => {
                        dispatch(
                            {
                                type: 'CREATE_USER',
                                user: {
                                    username: username,
                                    email: email,
                                    id: ++nextId.current
                                }
                            }
                        )
                        reset()
                    }
                }>등록
                </button>
            </ErrorBound>
        </div>
    );
}

export default React.memo(CreateUser);