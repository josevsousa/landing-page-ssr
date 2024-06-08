import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'buttom-icon-primary',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './buttom-icon-primary.component.html',
  styleUrl: './buttom-icon-primary.component.scss'
})
export class ButtomIconPrimaryComponent {
  @Input() title: string = 'nome';  
  @Input() icon: string = 'icon';  
}
