import {Component, forwardRef, Input} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from "@angular/forms";
import {WeatherInfo} from "./weather-info";
import {WeatherInfoService} from "./weather-info.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {first} from "rxjs";

@Component({
  selector: 'weather-info',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './weather-info.component.html',
  styleUrl: './weather-info.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WeatherInfoComponent),
      multi: true
    }
  ]
})
export class WeatherInfoComponent implements ControlValueAccessor {
  @Input() public question = ''
  public locationFormControl = new FormControl<string>("",
    {
      validators: [Validators.required],
      nonNullable: true
    })

  private onChange: ((info: WeatherInfo | null) => void) | undefined

  public constructor(private readonly service: WeatherInfoService,
                     private readonly snackBar: MatSnackBar) {
  }

  public registerOnChange(fn: (info: WeatherInfo | null) => void): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public registerOnTouched(_: (info: WeatherInfo) => void): void {
    // not implemented
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public writeValue(_: WeatherInfo): void {
    // not implemented
  }

  public onSearch(): void {
    const location = this.locationFormControl.value
    this.service.getInfo(location)
      .pipe(first())
      .subscribe({
        next: info => this.onChange && this.onChange(info),
        error: () => {
          this.snackBar.open(
            `No weather info available for "${location}"`,
            'Ok',
            { duration: 5000 }
          )
          this.onChange && this.onChange(null)
        }
      })
  }
}
