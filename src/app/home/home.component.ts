import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('workSection') workSection!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'work-section') {
        console.log('Work section reference:', this.workSection); // Debugging line
        if (this.workSection) {
          this.workSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}