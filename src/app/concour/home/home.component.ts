import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hearder2Component } from '../../hearder2/hearder2.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hearder2Component,RouterModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
