import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Activity } from "../models/activity.model";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ActivitesService {

    activitesChanged = new BehaviorSubject<Activity[]>([]);
    activitesChanged$ = this.activitesChanged.asObservable();

    constructor(private http: HttpClient){
        
    }


    getActivites(): Observable<Activity[]>{
        const body = {}
        return this.http.post<Activity[]>('',body).pipe(
            tap(activites => {
                // this.recipeService.setRecipes(recipes);
                this.activitesChanged.next(activites);
              })
        );
    }

    addActivity(){
        const body = {}
        return this.http.post('',body);
    }


}