import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hearder2',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hearder2.component.html',
  styleUrl: './hearder2.component.css'
})
export class Hearder2Component implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.') error;
  }

  // @HostListener('window:scroll', ['$event'])
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   const navbar = document.getElementById("mainNavbar");
  //   if (window.scrollY > 400) {
  //     navbar?.classList.add("navbar-fixed");
  //   } else {
  //     navbar?.classList.remove("navbar-fixed");
  //   }
  // }
  option:any=["images","videos"]
  selectedOption: string ='images';
  
  onSelectChange(event: Event) {
  
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    console.log('Selected value:', this.selectedOption);
   
  }
}
