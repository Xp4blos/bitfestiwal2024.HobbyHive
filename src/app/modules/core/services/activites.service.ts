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
    //panel.sebastiankura.com:25583/swagger

    getActivites(): Observable<Activity[]>{
        const body = {
            "longitude": 0.0,
            "latitude": 0.0,
            "radius": 100000
          }
        return this.http.post<Activity[]>('http://panel.sebastiankura.com:25583/get-activities', body).pipe(
            tap(activites => {
                this.activitesChanged.next(activites);
              })
        );
    }

    addActivity(){
        const body = {}
        return this.http.post('',body);
    }


}