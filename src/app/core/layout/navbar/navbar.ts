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
  isLanguageModalOpen = signal(false);
  
  // Login form
  username = '';
  password = '';
  
  // Signup form
  signupCurrency = 'BDT';
  signupUsername = '';
  signupPassword = '';
  signupPhone = '';

  // Language and Currency options
  languages = [
    { code: 'VND', flag: '🇻🇳', name: 'Tiếng Việt', language: 'English' },
    { code: 'INR', flag: '🇮🇳', name: '₹ INR', language: 'English' },
    { code: 'BDT', flag: '🇧🇩', name: '৳ BDT', language: 'বাংলা', languageAlt: 'English' },
    { code: 'THB', flag: '🇹🇭', name: '฿ THB', language: 'ไทย', languageAlt: 'English' },
    { code: 'PHP', flag: '🇵🇭', name: '₱ PHP', language: 'English', languageAlt: 'Tagalog' },
    { code: 'MMK', flag: '🇲🇲', name: 'Ks MMK', language: 'ဗမာ', languageAlt: 'English' },
    { code: 'PKR', flag: '🇵🇰', name: 'Rs PKR', language: 'English' },
    { code: 'NPR', flag: '🇳🇵', name: 'रु NPR', language: 'नेपाली', languageAlt: 'English' },
  ];

  selectedLanguage = this.languages[2]; // Default to BDT

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

  openLanguageModal() {
    this.isLanguageModalOpen.set(true);
  }

  closeLanguageModal() {
    this.isLanguageModalOpen.set(false);
  }

  selectLanguage(lang: any) {
    this.selectedLanguage = lang;
    this.closeLanguageModal();
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
