 export type User = {
    userId: string;
    email: string;

    name: string;
    imageURl?: string
    token: string;

}
export type LoginCredits={
    Email:string;
    Password:string;
}
export type RegisterCredits={
    name:string;
    email:string;
    password:string;
}