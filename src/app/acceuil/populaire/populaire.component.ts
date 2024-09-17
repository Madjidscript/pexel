import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hearder2Component } from '../../hearder2/hearder2.component';

@Component({
  selector: 'app-populaire',
  standalone: true,
  imports: [RouterModule,Hearder2Component],
  templateUrl: './populaire.component.html',
  styleUrl: './populaire.component.css'
})
export class PopulaireComponent {

}
