import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollToWork() {
    const element = document.getElementById('work-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}