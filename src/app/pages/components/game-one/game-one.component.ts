import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GameOneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
