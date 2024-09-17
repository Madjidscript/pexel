import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hearder2Component } from '../hearder2/hearder2.component';

@Component({
  selector: 'app-concour',
  standalone: true,
  imports: [RouterOutlet,Hearder2Component],
  templateUrl: './concour.component.html',
  styleUrl: './concour.component.css'
})
export class ConcourComponent {

}
