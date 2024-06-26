import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  public selectedNumber = 0;
  public headPrice = 0;
  public tailPrice = 0;
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
    public dialogRef: MatDialogRef<GameOneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    if (this.data) {
      if (this.data.id_user) this.id_user = this.data.id_user;
      if (this.data.selected_number) this.selectedNumber = this.data.selected_number
      if (this.data.head_price) this.headPrice = this.data.head_price
      if (this.data.tail_price) this.tailPrice = this.data.tail_price
    }
  }

  ngOnInit() {
  }
  save(): void {
    let result = {
      type_game: 1,
      id_user: this.id_user,
      selected_number: this.selectedNumber,
      head_price: this.headPrice,
      tail_price: this.tailPrice
    }
    this.dialogRef.close({ result: result });
  }
}
