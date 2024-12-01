import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  addUser(
    name: string,
    surname: string,
    email: string,
    tags: string[],
    categoryIds: number[]
  ) {
    let body = {
      name: name,
      surname: surname,
      email: email,
      tags: tags,
      categoryIds: categoryIds,
    };
    return this.http.post(
      'http://panel.sebastiankura.com:25583/register-user',
      body
    );
  }
}
