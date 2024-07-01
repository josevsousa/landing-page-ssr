import { Component } from '@angular/core';
import { SectionAboutComponent } from './sections/home-sections/section-about/section-about.component';
import { SectionMainComponent } from './sections/home-sections/section-main/section-main.component';
import { SectionEducationComponent } from './sections/home-sections/section-education/section-education.component';
import { SectionExperienceComponent } from './sections/home-sections/section-experience/section-experience.component';
import { SectionSkillsComponent } from './sections/home-sections/section-skills/section-skills.component';
import { SectionContatoComponent } from './sections/home-sections/section-contato/section-contato.component';
import { SectionFooterComponent } from './sections/home-sections/section-footer/section-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SectionMainComponent,
    SectionAboutComponent,
    SectionEducationComponent,
    SectionExperienceComponent,
    SectionSkillsComponent,
    SectionContatoComponent,
    SectionFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page-ssr';
}
