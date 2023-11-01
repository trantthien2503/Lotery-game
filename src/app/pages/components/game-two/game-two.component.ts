import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.css']
})
export class GameTwoComponent implements OnInit {
  public selectedNumber = 0;
  public price = 0;
  public id_user = ''
  public users = [
    {
      id: 0,
      name: "Tuấn"
    },
    {
      id: 1,
      name: "Quỳnh"
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<GameTwoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    if (this.data) {
      if (this.data.id_user) this.id_user = this.data.id_user;
      if (this.data.selected_number) this.selectedNumber = this.data.selected_number
      if (this.data.price) this.price = this.data.price
    }
  }

  ngOnInit() {
  }
  save(): void {
    let result = {
      type_game: 1,
      id_user: this.id_user,
      selected_number: this.selectedNumber,
      price: this.price,
    }
    this.dialogRef.close({ result: result });
  }
}
