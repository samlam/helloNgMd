import { Component } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdButton} from '@angular2-material/button';
import { CardComponent } from './card/card.component';
import { GrowlComponent } from './growl/growl.component';

@Component({
  moduleId: module.id,
  selector: 'hello-ng-md-app',
  templateUrl: 'hello-ng-md.component.html',
  styleUrls: ['hello-ng-md.component.css'],
  directives:[MdCheckbox, CardComponent, GrowlComponent, MdButton]
})
export class HelloNgMdAppComponent {
  title = 'Angular 2 w/ Material Design';
  growl = {
    title : "title",
    message : "msg"
  };
  
}
