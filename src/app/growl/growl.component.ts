import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'growl',
  templateUrl: 'growl.component.html',
  styleUrls: ['growl.component.css']
})
export class GrowlComponent implements OnInit {
  @Input() visible :boolean;
  @Input() message :string ;
  @Input() title :string;
  @Input() timeout :number = 5000;
  constructor() {
 
  }

  ngOnInit() {
    if (this.title == undefined) return;
    this.show(null,null);
  }
  
  hide(){
    this.visible = false;
  }

  show(newTitle :string, msg :string){
    this.title = (newTitle == undefined)? this.title: newTitle;
    this.message = (msg == undefined)? this.message: msg;
    this.visible = true;
    setTimeout(() => {
      this.hide();
    }, this.timeout);
  }
}
