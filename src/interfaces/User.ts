export default interface User {
    id?:string;
    name?: string;
    email: string;
    password: string;
    isBuisness?: boolean;
    cards?: any

}