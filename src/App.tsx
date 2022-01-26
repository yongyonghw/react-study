
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import {useRef, useState} from "react";
import CreateUser from "./CreateUser";

function App() {
    //username ,email 셋팅
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        id:''
    });
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
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);
    //nextId 초기값 4
    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        // setUsers([...users, user]);
        setUsers(users.concat(user));

        //초기화
        setInputs({
            username: '',
            email: '',
            id:''
        });
        nextId.current += 1;
    }

    const onRemove = (id:Number) => {
        setUsers(users.filter(user=> user.id !== id));
    }

    return (
        <>
            <CreateUser     username={username}
                            email={email}
                            onChange={onChange}
                            onCreate={onCreate}/>
            <UserList users={users} onRemove={onRemove} />
        </>
    );
}

export default App;