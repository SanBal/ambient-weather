import {Routes} from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {
  TemperatureVisualisationComponent
} from './weather-visualisation/temperature-visualisation/temperature-visualisation.component';
import {
  WindSpeedVisualisationComponent
} from './weather-visualisation/wind-speed-visualisation/wind-speed-visualisation.component';

export const routes: Routes = [
  { path: '', component: PreviewComponent },
  { path: 'temperature', component: TemperatureVisualisationComponent },
  { path: 'wind-speed', component: WindSpeedVisualisationComponent },
  { path: '**', redirectTo: '' }
];
