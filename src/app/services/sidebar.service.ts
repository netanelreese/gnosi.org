import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _isOpen = false;

  get isOpen(): boolean {
    return this._isOpen;
  }

  toggleSidebar(): void {
    this._isOpen = !this._isOpen;
  }

  openSidebar(): void {
    this._isOpen = true;
  }

  closeSidebar(): void {
    this._isOpen = false;
  }
}
