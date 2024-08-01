import {Component, EventEmitter, Output} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output()
  public infoClick = new EventEmitter()

  public constructor(private readonly router: Router) {
  }

  public goToHome(): void {
    this.router.navigate(['/']).then()
  }

  public showInfo(): void {
    this.infoClick.emit()
  }
}
