import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'preview',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {

  public goToVisualisation(visualisation: string): void {
  }
}
