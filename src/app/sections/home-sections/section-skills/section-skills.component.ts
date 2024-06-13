import { Component } from '@angular/core';
import { BarLoadingComponent } from './bar-loading/bar-loading.component';

@Component({
  selector: 'section-skills',
  standalone: true,
  imports: [BarLoadingComponent],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss'
})
export class SectionSkillsComponent {

}
