import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { GameOneComponent } from './components/game-one/game-one.component';
import { GameTwoComponent } from './components/game-two/game-two.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public resultsGameOne: Array<any> = [];
  public resultsGameTwo: Array<any> = [];
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
  public typeGames = [
    {
      id: 1,
      name: "Lô đề"
    },
    {
      id: 2,
      name: "Bao lô"
    },
  ];


  ngOnInit() { }

  constructor(
    private firebaseService: FirebaseService,
    public dialog: MatDialog
  ) {
  }

  openGameOne() {
    let input: any = {
      width: "270px",
      height: "370px",
      disableClose: true,
    }
    const dialogRef = this.dialog.open(GameOneComponent, input);

    dialogRef.afterClosed().subscribe(({ result }) => {
      if (result) {
        this.resultsGameOne = [...this.resultsGameOne, result]
      }
    });
  }


  openGameTwo() {
    let input: any = {
      width: "270px",
      height: "370px",
      disableClose: true,
    }
    const dialogRef = this.dialog.open(GameTwoComponent, input);

    dialogRef.afterClosed().subscribe(({ result }) => {
      if (result) {
        this.resultsGameTwo = [...this.resultsGameTwo, result]
      }
    });
  }



  deleteResultGameOne(position: number) {
    this.resultsGameOne = this.resultsGameOne.filter((_, index) => index != position)
  }

  deleteResultGameTwo(position: number) {
    this.resultsGameTwo = this.resultsGameTwo.filter((_, index) => index != position)
  }

  genarateUser(id_user: any) {
    return this.users.find(find => find.id === id_user)?.name;
  }

  genarateGame(type_game: any) {
    return this.typeGames.find(find => find.id === type_game)?.name;
  }
}
