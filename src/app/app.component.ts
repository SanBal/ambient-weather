import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./basic/header/header.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {InfoComponent} from "./basic/info/info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InfoComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ambient-weather';
}
