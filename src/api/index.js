export async function getUsers(params) {
    return await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
}