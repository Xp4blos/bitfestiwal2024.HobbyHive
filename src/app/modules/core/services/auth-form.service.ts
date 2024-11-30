import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthFormService {
  constructor() {}

  categories: string[] = [
    'Sports and Physical Activity',
    'Art and Crafts',
    'Books and Literature',
    'Music and Dance',
    'Gaming and E-sports',
    'Cooking and Culinary Arts',
    'Travel and Outdoor',
    'Technology and IT',
    'Health and Wellness',
    'Nature and Gardening',
    'Animals and Care',
    'Photography and Film',
    'Fashion and Design',
    'Science and Experiments',
    'History and Culture',
  ];

  get getCategories(): string[] {
    return this.categories;
  }
}
