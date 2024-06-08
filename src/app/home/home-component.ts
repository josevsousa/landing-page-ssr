import { Component } from "@angular/core";
import { SectionMainComponent } from "../sections/section-main/section-main.component";
import { SectionAboutComponent } from "../sections/section-about/section-about.component";
import { SectionEducationComponent } from "../sections/section-education/section-education.component";
import { SectionExperienceComponent } from "../sections/section-experience/section-experience.component";
import { SectionSkillsComponent } from "../sections/section-skills/section-skills.component";
import { SectionContatoComponent } from "../sections/section-contato/section-contato.component";
import { SectionFooterComponent } from "../sections/section-footer/section-footer.component";

@Component({
    selector: 'app-home',
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
    template: `
    <header>
        <section-main></section-main>
    </header>
    <main>
        <section-about></section-about>
        <section-education></section-education>
        <section-experience></section-experience>
        <section-contato></section-contato>
        <section-footer></section-footer>
    </main>
    `
})  

export class HomeComponent{}