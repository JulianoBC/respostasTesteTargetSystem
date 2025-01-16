import { Component } from '@angular/core';
import { QuestionsComponent } from './questions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [QuestionsComponent]
})
export class AppComponent {
  title = 'RespostasTesteTargetSystemAPP';
}
