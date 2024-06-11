import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-experience',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.scss'
})
export class CardExperienceComponent {

  @Input() card!: any;

  dataCards: any = { 
    id: 'portifolio',
    project: "José Vicente de Sousa",
    contribution: " Developer  FullStack",
    tecnologic: "Python, Web2py "
  }

}
