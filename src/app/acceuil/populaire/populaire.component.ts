import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hearder2Component } from '../../hearder2/hearder2.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-populaire',
  standalone: true,
  imports: [RouterModule,Hearder2Component,FooterComponent],
  templateUrl: './populaire.component.html',
  styleUrl: './populaire.component.css'
})
export class PopulaireComponent {

}
