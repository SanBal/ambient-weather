import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {WeatherInfoComponent} from "./weather-info/weather-info.component";
import {WeatherInfo} from "./weather-info/weather-info";
import {Subscription} from "rxjs";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'weather-visualisation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    WeatherInfoComponent,
    NgStyle
  ],
  templateUrl: './weather-visualisation.component.html',
  styleUrl: './weather-visualisation.component.css'
})
export class WeatherVisualisationComponent implements OnInit, OnDestroy {
  public question = ''
  public weatherInfoFormControl = new FormControl<WeatherInfo | null>(null)
  public weatherInfo: WeatherInfo | null = null
  private weatherInfoSubscription: Subscription | null = null

  public ngOnInit(): void {
    this.weatherInfoSubscription = this.weatherInfoFormControl
      .valueChanges
      .subscribe(info => {
        this.weatherInfo = info
        this.updateVisualisation(info)
      })
  }

  public ngOnDestroy(): void {
    this.weatherInfoSubscription?.unsubscribe()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  protected updateVisualisation(info: WeatherInfo | null): void {}
}
