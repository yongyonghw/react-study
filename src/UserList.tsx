import React, {useContext, useEffect} from 'react';
import {UserDispatch} from "./App";

type User= {
    user:any
}

const User = React.memo(function User(prop: User) {
    const dispatch = useContext(UserDispatch)
    console.log('user')
    const user = prop.user;

    return (
        <div>
            {user.id} <b onClick={() => dispatch({type:'TOGGLE_USER', id: user.id})} style={{cursor:'pointer', color: user.active ? 'green' : 'black'}}>{user.username}</b> <span>({user.email})</span>
            <button onClick={()=> dispatch({type:'REMOVE_USER', id: user.id})}>삭제</button>
        </div>
    );
});

type Users = {
    id?: number
    username?: string
    email?: string
}

type UserListType = {
    users:any
}

function UserList(props:UserListType) {
    console.log('userlist')
    const users = props.users
    return (
        <div>
            {users.map((user: Users)=>(
                // <User id={user.id} username={user.username} email={user.email} key={user.id}></User>
                <User user={user} key={user.id} />
            ))}

        </div>
    );
}

export default React.memo(UserList);