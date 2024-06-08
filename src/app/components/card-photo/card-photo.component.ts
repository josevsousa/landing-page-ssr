import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-photo.component.html',
  styleUrl: './card-photo.component.scss'
})
export class CardPhotoComponent {

}
