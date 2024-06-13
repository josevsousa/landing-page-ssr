import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-loading',
  standalone: true,
  imports: [],
  template: `
  <div class="entidade">
      <h3>{{title}}</h3>
        <div class="bar-loading" style="width: {{bar}}%;"></div>
        <h4>{{bar}}%</h4>
      </div>`,
  styleUrl: './bar-loading.component.scss'
})
export class BarLoadingComponent {
  @Input() title!: String;
  @Input() bar!: number;
}
