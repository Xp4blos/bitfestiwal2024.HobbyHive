import { Component, OnInit } from '@angular/core';
import { AuthFormService } from '../../../core/services/auth-form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private authFormService: AuthFormService) {}

  addCategory(): void {
    //skipping hobby categories
    this.chosenCategories.push(this.categoryIterator);
    console.log(this.chosenCategories);

    this.categoryIterator++;
    this.currentCategory = this.categories[this.categoryIterator];
  }

  skipCategory(): void {
    //skipping hobby category
    this.categoryIterator++;
    this.currentCategory = this.categories[this.categoryIterator];
  }
  addTag(): void {
    //adding tags
    if (this.newTag && !this.userTags.includes(this.newTag)) {
      this.userTags.push(this.newTag);
      console.log(this.newTag, this.userTags);
      this.newTag = '';
    }
  }

  deleteTag(tag: string): void {
    //deleting tags
    const index = this.userTags.indexOf(tag);
    if (index > -1) {
      this.userTags.splice(index, 1);
    }
  }
  onRegister() {
    //adding user
    console.log(this.registerForm.getRawValue(), this.chosenCategories);
    this.userTags;
  }
  ngOnInit(): void {
    this.categories = this.authFormService.getCategories;
    this.currentCategory = this.categories[this.categoryIterator];
  }
}
