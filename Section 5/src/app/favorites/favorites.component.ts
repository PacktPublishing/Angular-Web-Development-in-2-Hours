import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  articles;
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    const val = localStorage.getItem('items');

    if (val !== null) {
      this.articles = JSON.parse(val);
    }
  }

  onUnfavorite(article) {
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.articles));
    this.snackBar.open('Favorite Removed', 'ok', {
      duration: 3000
    });
  }
}
