import { User } from "./User";

export interface Profile{
    username :string;
    displayName: string;
    image?: string;
    bio?:string;
}

export class Profile implements Profile{
    constructor(user: User){
        this.username = user.username;
        this.displayName = user.username;
        this.image = user.image;
    }
}