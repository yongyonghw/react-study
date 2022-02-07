import React from 'react';


type CreateUserType =
    {
        username:string, email:string, onChange:any, onCreate:any
    }


function CreateUser(props:CreateUserType) {
    console.log('createuser')
    const { username, email, onChange, onCreate } = props
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