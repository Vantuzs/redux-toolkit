import axios from "axios";

export async function getUsers(params) {
    // return await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users
}