import {User} from "./UserModel";

export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTHENTICATED = 'AUTHENTICATED';

export function authenticate(email: string, password: string) {
    // @ts-ignore
    return dispatch => {
        dispatch(authenticating)
        return fetch('http://localhost:8080/login', {
            method: "POST",
            redirect: "follow",
            credentials: 'include',
            body: `username=${email}&password=${password}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(json => dispatch(authenticated(json as User)))

    }
}

export function authenticating() {
    return {
        type: AUTHENTICATING,
    }
}

export function authenticated(user: User) {
    return {
        type: AUTHENTICATED,
        payload: {
            user: user
        }
    }
}