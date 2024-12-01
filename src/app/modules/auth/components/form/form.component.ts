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
  categoryIterator: number = 0;
  currentRadius: number = 1000;
  radiusses: number[] = [500, 1000, 5000, 10000];
  newTag!: string;
  userTags: string[] = [];

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
  addTag(): void {
    if (this.newTag && !this.userTags.includes(this.newTag)) {
      this.userTags.push(this.newTag);
      console.log(this.newTag, this.userTags);
      this.newTag = '';
    }
  }

  deleteTag(tag: string): void {
    const index = this.userTags.indexOf(tag);
    if (index > -1) {
      this.userTags.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.categories = this.authFormService.getCategories;
    this.currentCategory = this.categories[this.categoryIterator];
  }
}
