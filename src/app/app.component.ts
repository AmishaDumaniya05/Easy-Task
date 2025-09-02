import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-user';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = DUMMY_USERS;

  selecteduserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selecteduserId);
  }

  onselectUser(id: string) {
    this.selecteduserId = id;
  }


}


