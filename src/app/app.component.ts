import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  message: string = "Hello from Ayuuu!!";
  logo: string = 'https://i.pinimg.com/736x/c6/42/6a/c6426a033e612bdea39740a1e2c7f925.jpg';
}