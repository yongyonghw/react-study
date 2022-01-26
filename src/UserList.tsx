import React from 'react';

function User(prop:any) {
    const user = prop.user;
    return (
        <div>
            {user.id} <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={()=> prop.onRemove(user.id)}>삭제</button>
        </div>
    );
}

type Users = {
    id?: number
    username?: string
    email?: string
}

function UserList(props:any) {

    const users = props.users
    return (
        <div>
            {users.map((user: Users)=>(
                // <User id={user.id} username={user.username} email={user.email} key={user.id}></User>
                <User user={user} key={user.id} onRemove={props.onRemove}/>
            ))}

        </div>
    );
}

export default UserList;