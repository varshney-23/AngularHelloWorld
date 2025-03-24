import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  message: string = "Hello from Ayuuu!!";
  logo: string = 'https://i.pinimg.com/736x/c6/42/6a/c6426a033e612bdea39740a1e2c7f925.jpg';
  url: string = 'https://i.pinimg.com/736x/61/61/e5/6161e503612e57397d4ddd7fa518b426.jpg';

  openLogo(): void {
    window.open(this.url, '_blank');
  }
}
