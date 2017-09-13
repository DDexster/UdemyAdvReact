import axios from "axios";
import { FETCH_USERS } from "./types";


export function fetchUsers() {
    const URL = "http://jsonplaceholder.typicode.com/users";
    const request = axios.get(URL);
    return {
        type: FETCH_USERS,
        payload: request
    };
}