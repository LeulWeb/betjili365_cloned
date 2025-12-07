import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  standalone: true,
})
export class Navbar {
  isLoginModalOpen = signal(false);
  username = '';
  password = '';

  openLoginModal() {
    this.isLoginModalOpen.set(true);
  }

  closeLoginModal() {
    this.isLoginModalOpen.set(false);
  }

  onLogin() {
    console.log('Login:', this.username, this.password);
    // Add your login logic here
    this.closeLoginModal();
  }
}
