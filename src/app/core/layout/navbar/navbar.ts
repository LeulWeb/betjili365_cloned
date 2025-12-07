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
  isSignupModalOpen = signal(false);
  
  // Login form
  username = '';
  password = '';
  
  // Signup form
  signupCurrency = 'BDT';
  signupUsername = '';
  signupPassword = '';
  signupPhone = '';

  openLoginModal() {
    this.isLoginModalOpen.set(true);
  }

  closeLoginModal() {
    this.isLoginModalOpen.set(false);
  }

  openSignupModal() {
    this.isSignupModalOpen.set(true);
  }

  closeSignupModal() {
    this.isSignupModalOpen.set(false);
  }

  onLogin() {
    console.log('Login:', this.username, this.password);
    this.closeLoginModal();
  }

  onSignup() {
    console.log('Signup:', {
      currency: this.signupCurrency,
      username: this.signupUsername,
      password: this.signupPassword,
      phone: this.signupPhone
    });
    this.closeSignupModal();
  }

  isPasswordValid(): boolean {
    const hasLength = this.signupPassword.length >= 6 && this.signupPassword.length <= 20;
    const hasLetter = /[a-zA-Z]/.test(this.signupPassword);
    const hasNumber = /[0-9]/.test(this.signupPassword);
    return hasLength && hasLetter && hasNumber;
  }
}
