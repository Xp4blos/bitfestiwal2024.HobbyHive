export class Activity {
    public id: string;
    public title: string;
    public category: string;
    public description: string;
    public imageUrl: string;
    
    constructor(id: string, title: string,category: string, description: string, imageUrl: string ){
        this.id = id ;
        this.title = title;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}