import { Activity } from "./activity.model";
import { Category } from "./category.model";

export class User {
    public id: string;
    public name: string;
    public surname: string;
    public email: string;
    public tag: string[];
    public category: Category[];
    public activities: Activity[]; 

    constructor(id: string, name: string, surname: string, email:string, tag: string[], category: Category[], activities: Activity[]){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.tag = tag;
        this.category = category;
        this.activities = activities;
    }

}