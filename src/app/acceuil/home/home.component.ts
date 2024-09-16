import { Component, OnInit } from '@angular/core';
import { HearderComponent } from '../../hearder/hearder.component';
import { GaleryComponent } from '../../galery/galery.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HearderComponent,RouterModule,GaleryComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  option:any=["images","videos"]
  selectedOption: string ='images';
  ngOnInit(): void {
    
  }


  onSelectChange(event: Event) {
  
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    console.log('Selected value:', this.selectedOption);
   
  }
}
