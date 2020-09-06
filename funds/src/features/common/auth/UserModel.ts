export interface User {
    name: string;
    credentials: string;
    principal: string;
    authenticated: boolean;
    details: string;
    authorities: Array<Authority>
}

export interface Authority{
    authority: String
}
