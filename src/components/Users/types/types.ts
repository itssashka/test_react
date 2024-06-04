export enum UserRoles {
    ANT = 'ANT',
    ANT_MANAGER = 'ANT_MANAGER',
    ANT_OFFICER = 'ANT_OFFICER',
    DEVELOPER = 'DEVELOPER'
}

export const UserRolesObj: Record<UserRoles, string> = {
    [UserRoles.ANT]: 'ANT',
    [UserRoles.ANT_MANAGER]: 'ANT_MANAGER',
    [UserRoles.ANT_OFFICER]: 'ANT_OFFICER',
    [UserRoles.DEVELOPER]: 'DEVELOPER',
};

export interface WorkBorders {
    id?: string;
    name: string;
}

export interface User {
    id?: string,
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    roles?: UserRoles[];
    workBorders?: WorkBorders[];
}
