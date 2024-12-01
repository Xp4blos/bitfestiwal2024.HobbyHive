export class Activity {
    public id: string;
    public title: string;
    public category: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public imageUrl: string;
    
    constructor(id: string, title: string,category: string, description: string,startDate: string,endDate: string, imageUrl: string ){
        this.id = id ;
        this.title = title;
        this.category = category;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.imageUrl = imageUrl;
    }
}