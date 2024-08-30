import { Injectable } from '@angular/core';
import { BlogEntry } from '../models/blog-entry.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly storageKey = 'blogEntries';

  constructor() {}

  getAllEntries(): BlogEntry[] {
    const entries = localStorage.getItem(this.storageKey);
    return entries ? JSON.parse(entries) : [];
  }

  saveEntry(entry: BlogEntry): void {
    const entries = this.getAllEntries();
    entry.id = entries.length ? Math.max(...entries.map(e => e.id || 0)) + 1 : 1; // Auto-increment ID using spread operator
    entries.push(entry);
    localStorage.setItem(this.storageKey, JSON.stringify(entries));
  }
}
