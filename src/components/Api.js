import axios from 'axios'



export function FetchUserInfos(id) {

    return axios.get('https://jsonplaceholder.typicode.com/users/' +id)
 
  
}
export function FetchUsers() {

    return axios.get('https://jsonplaceholder.typicode.com/users')
 
  
}