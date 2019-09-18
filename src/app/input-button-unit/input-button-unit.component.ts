import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `

    <input class="todo-input"
       #inputElementRef
       [value]="title"
       (keyup.enter)="submitValue($event.target.value)">

    <button class="btn"
           (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'What\'s on the agenda?';
  @Output()
  private _submit: EventEmitter<string> = new EventEmitter();
  public get submit(): EventEmitter<string> {
    return this._submit;
  }
  public set submit(value: EventEmitter<string>) {
    this._submit = value;
  }

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  // tslint:disable-next-line: no-output-native
}
