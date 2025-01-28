export type userType = {
    name: string,
    lastName: string,
    email: string,
    address: string,
    password: string,
    phone: string
}

export type Action = { 
    type: 'UPDATE',
    data: userType
} | {
    type: 'DELETE',
} | {
    type: 'CREATE',
    name: string,
    email: string,
    password: string 
}
