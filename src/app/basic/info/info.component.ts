import { Component } from '@angular/core';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'info',
  standalone: true,
  imports: [
    MatList,
    MatDivider,
    MatListItem,
    MatListSubheaderCssMatStyler,
    MatAnchor
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
