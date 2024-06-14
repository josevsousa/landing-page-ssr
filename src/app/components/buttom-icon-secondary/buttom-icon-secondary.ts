import { Component, Input } from "@angular/core";

@Component({
    selector: 'buttom-icon-secondary',
    standalone: true,
    template: `
        <div class="main-buttom">
            <a href="{{link}}" >
                <img src="./assets/icons/buttom/{{title}}.svg">
            </a>
        </div>
    `,
    styleUrl: './buttom-icon-secondary.scss'
})

export class ButtomIconSecondaryComponent {

    @Input() title!: string;
    @Input() link!: string;
}