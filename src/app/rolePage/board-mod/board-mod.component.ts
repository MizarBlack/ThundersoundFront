import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-board-mod',
  templateUrl: './board-mod.component.html',
  styleUrls: ['./board-mod.component.scss']
})
export class BoardModeratorComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        this.content = JSON.parse(err.error).message;
      }
    })
  }
}

