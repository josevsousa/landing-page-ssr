import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-experience',
  standalone: true,
  imports: [],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.scss'
})
export class CardExperienceComponent {

  @Input() card!: any;

}
