export enum UserRoles {
    USER = 'user',
    ADMIN = 'admin',
    SUPERVISOR = 'supervisor',
}

export interface WorkBorders {
    id: string;
    name: string;
}

export interface User {
    id: string,
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: UserRoles[];
    workBorders: WorkBorders[];
}
