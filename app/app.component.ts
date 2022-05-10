import { Component } from '@angular/core';
import { Event } from './event';
import { EventService } from './event.service';


export type EditorType = 'list' | 'add' | 'welcome' | 'summary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})
export class AppComponent {
  editor: EditorType = 'welcome';

  constructor(private eService: EventService){

  }

  EVENTS: Event[] = [];

  ngOnInit() {
    this.EVENTS = this.eService.EVENTS;
  }

  get showList() {
    return this.editor === 'list';
  }

  get showAdd() {
    return this.editor === 'add';
  }

  get showWelcome() {
    return this.editor === 'welcome';
  }

  get showSummary() {
    return this.editor === 'summary';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
