import { Component, Input } from '@angular/core';
import { ButtomIconSecondaryComponent } from '../buttom-icon-secondary/buttom-icon-secondary';

@Component({
  selector: 'card-experience',
  standalone: true,
  imports: [ButtomIconSecondaryComponent],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.scss'
})
export class CardExperienceComponent {

  @Input() card!: any;

}
