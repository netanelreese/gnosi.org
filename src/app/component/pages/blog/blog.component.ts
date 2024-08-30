import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../services/blog.service';
import { BlogEntry } from '../../../models/blog-entry.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogEntries: BlogEntry[] = [];
  blogForm: FormGroup;
  submitted = false;

  constructor(private blogService: BlogService, private formBuilder: FormBuilder) {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEntries();
  }

  loadEntries(): void {
    this.blogEntries = this.blogService.getAllEntries();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.blogForm.invalid) {
      return;
    }

    const newEntry: BlogEntry = {
      title: this.blogForm.value.title,
      content: this.blogForm.value.content,
      author: this.blogForm.value.author,
      date: new Date()
    };

    this.blogService.saveEntry(newEntry);
    this.blogForm.reset();
    this.submitted = false;
    this.loadEntries(); // Reload entries to include the new one
  }
}
