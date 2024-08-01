import {Routes} from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {
  TemperatureVisualisationComponent
} from "./weather-visualisation/temperature-visualisation/temperature-visualisation.component";

export const routes: Routes = [
  { path: '', component: PreviewComponent },
  { path: 'temperature', component: TemperatureVisualisationComponent },
];
