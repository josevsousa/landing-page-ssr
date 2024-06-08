import { Component } from '@angular/core';
import { CardPhotoComponent } from '../../../components/card-photo/card-photo.component';

@Component({
  selector: 'section-main',
  standalone: true,
  imports: [CardPhotoComponent],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss'
})
export class SectionMainComponent {

}
