import { Component, OnInit, inject } from '@angular/core';
import { CardExperienceComponent } from '../../../components/card-experience/card-experience.component';
import { CardExperience } from '../../../interfaces/card-experience';
import { CardExperienceService } from '../../../services/card-experience.service';

@Component({
  selector: 'section-experience',
  standalone: true,
  imports: [CardExperienceComponent],
  templateUrl: './section-experience.component.html',
  styleUrl: './section-experience.component.scss'
})
export class SectionExperienceComponent implements OnInit {

  cardExperienceService = inject(CardExperienceService);
  
  
  dataCards!: CardExperience[];

  ngOnInit(){
    this.dataCards = this.cardExperienceService.getCardExperiences();
  }


}
