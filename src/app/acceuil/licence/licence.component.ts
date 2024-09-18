import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hearder2Component } from '../../hearder2/hearder2.component';

@Component({
  selector: 'app-licence',
  standalone: true,
  imports: [RouterModule,Hearder2Component],
  templateUrl: './licence.component.html',
  styleUrl: './licence.component.css'
})
export class LicenceComponent {

}
