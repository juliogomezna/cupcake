import { UserRoles } from './userRole.enum'

export interface User {
    id: number,
    username: string,
    name: string,
    password: string,
    role: UserRoles,
    country: string,
    description: string
}