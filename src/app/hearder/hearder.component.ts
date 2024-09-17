import { Component,HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hearder',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.css'
})
export class HearderComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.') error;
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 380) {
      navbar?.classList.add("navbar-fixed");
    } else {
      navbar?.classList.remove("navbar-fixed");
    }
  }
}
