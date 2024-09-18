import { Component } from '@angular/core';
import { HearderComponent } from '../../hearder/hearder.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HearderComponent,RouterModule,FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
