import { UserRoles } from './userRole.enum'

export interface User {
    username: string,
    name: string,
    password: string,
    role: UserRoles,
    country: string,
    description: string
}