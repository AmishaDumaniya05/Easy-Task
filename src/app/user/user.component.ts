import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }


@Component({
  selector: 'app-user',

  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  @Input({ required: true }) user !: User;
  @Input({ required: true }) selected !:boolean;
  @Output() select = new EventEmitter();


  get imagePath() {
    return 'users/' + this.user.avatar;
  }
  onselectUser() {
    this.select.emit(this.user.id);
    
  }
}
