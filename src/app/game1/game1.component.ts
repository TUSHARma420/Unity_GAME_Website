import { Component } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component {
  players: string[] = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
  currentPlayer: string = this.players[1];
  ballPossession: string | null = null;
  gameOver: boolean = false;
  
  passBall(player: string) {
    if (this.ballPossession === null) {
      this.ballPossession = player;
    } else {
      const currentIndex = this.players.indexOf(this.ballPossession);
      const nextIndex = (currentIndex + 1) % this.players.length;
      this.ballPossession = this.players[nextIndex];
    }
  
    // Check if players successfully collaborated to win
    if (this.ballPossession === 'Player 1') {
      this.gameOver = true;
    }
   
    const currentPlayerIndex = this.players.indexOf(this.currentPlayer);
    const nextPlayerIndex = (currentPlayerIndex + 1) % this.players.length;
    this.currentPlayer = this.players[nextPlayerIndex];
  }
}
