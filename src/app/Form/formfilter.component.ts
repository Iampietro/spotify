import { Component, EventEmitter, Output, Input, } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['form-filter.component.css']
})

export class FormFilter {

  constructor() { }

  @Input() text = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

}
