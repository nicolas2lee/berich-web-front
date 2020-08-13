export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTHENTICATED = 'AUTHENTICATED';

export function authenticate(email: string, password: string) {
    // @ts-ignore
    return dispatch => {
        dispatch(authenticating)
        return fetch('http://localhost:8090/login')
            .then(response => response.json())
            .then(x => console.log(x))
            .then(json => dispatch(authenticated()))
    }
}

export function authenticating() {
    return {
        type: AUTHENTICATING,
    }
}

export function authenticated() {
    return {
        type: AUTHENTICATED,
    }
}