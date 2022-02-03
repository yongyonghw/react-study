
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import {useEffect, useMemo, useRef, useState} from "react";
import CreateUser from "./CreateUser";

function countActiveUsers(users : any) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter((user:any) => user.active).length;
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
    const { username, email } = inputs;

    //input 값이 변할때마다 렌더링
    const onChange = (e:any) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

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
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
            active: false
        };
        // setUsers([...users, user]);
        setUsers(users.concat(user));

        //초기화
        setInputs(format);
        nextId.current += 1;
    }

    const onRemove = (id:Number) => {
        setUsers(users.filter(user=> user.id !== id));
    }

    const onToggle = (id:Number) => {
        setUsers(
            users.map(user =>
                user.id === id ? {
                    ...user, active: !user.active
                } : user
            )
            );
    };

    const count = useMemo(() => countActiveUsers(users),[users]);


    return (
        <>
            <CreateUser     username={username}
                            email={email}
                            onChange={onChange}
                            onCreate={onCreate}/>
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자수 : {count}</div>
        </>
    );
}

export default App;