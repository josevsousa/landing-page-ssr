import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CardPhotoComponent } from '../../../components/card-photo/card-photo.component';

@Component({
  selector: 'section-main',
  standalone: true,
  imports: [CardPhotoComponent, NgOptimizedImage],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss'
})
export class SectionMainComponent {

}
