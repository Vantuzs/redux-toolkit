import React, {useState} from 'react';

const UserList = () => {
    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    return (
        <section>
            {isLoading && <div>Loading..................................0</div>}
            {error && <div>Error</div>}
            {users.length>0 && users.map((currentUserObj)=><article>{JSON.stringify(currentUserObj)}</article>)}
        </section>
    );
}

export default UserList;
