export const TOGGLE_LOGIN = "toggle_login";

export function toggleLogin(isLoggedIn){
    return {
        type: TOGGLE_LOGIN,
        payload: isLoggedIn
    }
}