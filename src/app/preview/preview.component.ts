import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

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

  public constructor(private readonly router: Router) {
  }

  public goToVisualisation(visualisation: string): void {
    this.router.navigate([`/${visualisation}`]).then()
  }
}
