import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  selectedGame: number;
  selectedNumber: number;
  selectedPrice: number;
  isSaved: boolean = false;
  ngOnInit() {
  }

  constructor(
    private firebaseService: FirebaseService
  ) {
    this.selectedGame = 2;
    this.selectedNumber = 0;
    this.selectedPrice = 0;
    this.isSaved = true;

  }

  saveSelection() {
    this.isSaved = true;
  }
}
