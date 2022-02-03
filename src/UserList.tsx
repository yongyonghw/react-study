import React, {useEffect} from 'react';

type User= {
    user:any, onToggle:any, onRemove:any
}

const User = React.memo(function User(prop: User) {
    console.log('user')
    const user = prop.user;

    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);

    return (
        <div>
            {user.id} <b onClick={() => prop.onToggle(user.id)} style={{cursor:'pointer', color: user.active ? 'green' : 'black'}}>{user.username}</b> <span>({user.email})</span>
            <button onClick={()=> prop.onRemove(user.id)}>삭제</button>
        </div>
    );
});

type Users = {
    id?: number
    username?: string
    email?: string
}

type UserListType = {
    users:any, onRemove:any, onToggle:any
}

function UserList(props:UserListType) {
    console.log('userlist')
    const users = props.users
    return (
        <div>
            {users.map((user: Users)=>(
                // <User id={user.id} username={user.username} email={user.email} key={user.id}></User>
                <User user={user} key={user.id} onRemove={props.onRemove} onToggle={props.onToggle}/>
            ))}

        </div>
    );
}

export default React.memo(UserList);