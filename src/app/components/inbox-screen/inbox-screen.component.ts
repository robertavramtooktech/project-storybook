
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inbox-screen',
  templateUrl: 'inbox-screen.component.html',
})
export class InboxScreenComponent {
  @Input() error: any;
}