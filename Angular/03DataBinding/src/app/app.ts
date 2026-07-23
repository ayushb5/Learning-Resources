import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03DataBinding');

  // Interpolation
  name: string = "John";
  age: number = 18;
  city: string = "Mumbai"

  // Property binding
  btn: string = "p-1 mt-3 m-4 cursor-pointer bg-amber-200 hover:bg-amber-400 border border-amber-700";

  buttonClick() {
    alert("You clicked me");
  }
}
