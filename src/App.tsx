
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import React, {useCallback, useEffect, useMemo, useReducer, useRef, useState} from "react";
import CreateUser from "./CreateUser";
import exp from "constants";

function countActiveUsers(users : any) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter((user:any) => user.active).length;
}



const initialState = {
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
        case 'CHANGE_INPUT' :
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name] : action.value
                }
            };

        case 'CREATE_USER' :
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }

        default:
            return state;
    }
}


function AppReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;
    const {username, email} = state.inputs;
    const nextId = useRef(4);

    const onChange = useCallback((e:any) => {
        const { name, value } = e.target;
        dispatch( {
            type: 'CHANGE_INPUT'
        });
    }, [] );

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
    }, [username, email]);


    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onChange}/>
            <UserList users={users} onRemove={''} onToggle={''}></UserList>
            <div>활성사용자 수: 0</div>
        </>
    )
}

function App() {
    const format = {
        username: '',
        email: '',
        id:'',
        active: false
    }

    //username ,email 셋팅
    const [inputs, setInputs] = useState(format);
    const { username, email} = inputs;

    //input 값이 변할때마다 렌더링
    const onChange = useCallback((e:any) => {
        const { name, value } = e.target;
        setInputs(inputs => ({
            //기존 input에 값을 덮어 씌운다
            ...inputs,
            [name]: value
        }));
    }, [] );

    const [users, setUsers] = useState([
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
    ]);
    //nextId 초기값 4
    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
            active: false
        };
        // setUsers([...users, user]);
        setUsers(users => users.concat(user));
        //초기화
        setInputs(format);
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback((id:Number) => {
        setUsers(users => users.filter(user=> user.id !== id));
    },[]);

    const onToggle = useCallback((id:Number) => {
        setUsers(users =>
                users.map(user =>
                user.id === id ? {
                    ...user, active: !user.active
                } : user
            )
            );
    },[] );

    const count = useCallback( countActiveUsers(users),[users]);

    return (
        <>
            <CreateUser     username={username}
                            email={email}
                            onChange={onChange}
                            onCreate={onCreate}/>
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <ActiveUser count = {count}></ActiveUser>
        </>
    );
}

type ActiveUserProps = {
    count: number;
}

const ActiveUser = React.memo(function ActiveUser({count} :ActiveUserProps) {
    console.log('ActiveUser')
    return <div>활성 사용자수 : {count}</div>;
});

export {AppReducer};
export default App;

