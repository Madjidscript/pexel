import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hearder2Component } from '../../hearder2/hearder2.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-licence',
  standalone: true,
  imports: [RouterModule, Hearder2Component, FooterComponent],
  templateUrl: './licence.component.html',
  styleUrl: './licence.component.css'
})
export class LicenceComponent {

}
