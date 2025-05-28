import React from 'react';
import Header from 'Components/Header/Header';
import UserList from 'Components/UserList/UserList';

const UsersPage = () => {
    return (
        <>
           <Header/>
           <h1>Our clients =P</h1> 
           <UserList/>
        </>
    );
}

export default UsersPage;
