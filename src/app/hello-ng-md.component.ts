import { Component } from '@angular/core';
import {MdCheckbox} from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'hello-ng-md-app',
  templateUrl: 'hello-ng-md.component.html',
  styleUrls: ['hello-ng-md.component.css'],
  directives:[MdCheckbox]
})
export class HelloNgMdAppComponent {
  title = 'hello-ng-md works!';
}
