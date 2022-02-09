
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import React, {Dispatch, ReducerAction, useCallback, useEffect, useMemo, useReducer, useRef, useState} from "react";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users : any) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter((user:any) => user.active).length;
}



const initialState:any = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

function reducer(state:any, action:any) {
    switch (action.type) {
        // case 'CHANGE_INPUT' :
        //     return {
        //         ...state,
        //         inputs: {
        //             ...state.inputs,
        //             [action.name] : action.value
        //         }
        //     };

        case 'CREATE_USER' :
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map((user:any) =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter((user:any) => user.id !== action.id)
            };

        default:
            return state;
    }
}


export const UserDispatch = React.createContext((f:any)=>{});

function AppReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [{username,email}, onChange, reset] = useInputs({username:'', email:''})
     const {users} = state;
    // const {username, email} = state.inputs;
    // const onChange = useCallback((e:any) => {
    //     const { name, value } = e.target;
    //     dispatch( {
    //         type: 'CHANGE_INPUT',
    //         name,value
    //     });
    // }, [] );

    // const onCreate = useCallback(() => {
    //     dispatch({
    //         type: 'CREATE_USER',
    //         user: {
    //             id: nextId.current,
    //             username,
    //             email
    //         }
    //     });
    //     nextId.current += 1;
    // }, [username, email]);

    // const onToggle = useCallback(id => {
    //     dispatch({
    //         type: 'TOGGLE_USER',
    //         id
    //     });
    // }, []);
    //
    // const onRemove = useCallback(id => {
    //     dispatch({
    //         type: 'REMOVE_USER',
    //         id
    //     });
    // }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <UserDispatch.Provider value={dispatch}>
            {/*<CreateUser username={username} email={email} onCreate={onCreate}/>*/}
            <CreateUser/>
            <UserList users={users} ></UserList>
            <div>활성사용자 수: {count}</div>
        </UserDispatch.Provider>
    )
}

type ActiveUserProps = {
    count: number;
}

const ActiveUser = React.memo(function ActiveUser({count} :ActiveUserProps) {
    console.log('ActiveUser')
    return <div>활성 사용자수 : {count}</div>;
});

export default AppReducer;

//4