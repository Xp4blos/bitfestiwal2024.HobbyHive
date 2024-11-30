import { Component, OnInit } from '@angular/core';
import { AuthFormService } from '../../../core/services/auth-form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  currentCategory: string = '';
  categories: string[] = [];
  chosenCategories: number[] = [];
  categoryIterator: number = 15;

  constructor(private authFormService: AuthFormService) {}

  addCategory(): void {
    this.chosenCategories.push(this.categoryIterator);
    this.categoryIterator++;
    this.currentCategory = this.categories[this.categoryIterator];
  }

  skipCategory(): void {
    this.categoryIterator++;
    this.currentCategory = this.categories[this.categoryIterator];
  }

  ngOnInit(): void {
    this.categories = this.authFormService.getCategories;
    this.currentCategory = this.categories[this.categoryIterator];
  }
}
