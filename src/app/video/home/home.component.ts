import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GaleryComponent } from '../../galery/galery.component';
import { HearderComponent } from '../../hearder/hearder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule,GaleryComponent,HearderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
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
