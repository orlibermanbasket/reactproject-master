import axios from "axios";
import BuisnessCard from "../interfaces/BuisnessCard";
import User from "../interfaces/User";
const api: string = process.env.REACT_APP_API  || "";

export function checkUser(userToCheck: User) {
    return axios.post(`${api}/login`,userToCheck)
}
export function newUser(userToAdd: User) {
    return axios.post(`${api}/register`,userToAdd)
}

export function getUserProfile(){
    return axios.get(`${api}/me`,{
        headers: {
          Authorization: JSON.parse(sessionStorage.getItem("userData") as string)
            .token,
        },
      })
}
