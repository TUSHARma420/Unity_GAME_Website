import { Component } from '@angular/core';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component {
  players: string[] = [];
  teamSize: number = 0;
  newPlayerName!: string;
  playerToRemove!: string;
  submitPlayerName() {
    // Handle the submission of the player name
    if (this.newPlayerName) {
      // Perform any desired actions with the submitted player name
      console.log('Player name:', this.newPlayerName);
      
      // Reset the input field
      this.newPlayerName = '';
    }
  }

  addPlayer(playerName: string) {
    if (playerName.trim() !== '') {
      this.players.push(playerName);
    }
  }

  removePlayer(playerName: string) {
    const index = this.players.indexOf(playerName);
    if (index !== -1) {
      this.players.splice(index, 1);
    }
  }

  setTeamSize(size: number) {
    this.teamSize = size;
  }

  getTeams() {
    if (this.teamSize > 0 && this.teamSize <= this.players.length) {
      const shuffledPlayers = this.shuffle(this.players);
      const teams: string[][] = [];
      let currentTeam: string[] = [];

      shuffledPlayers.forEach((player, index) => {
        currentTeam.push(player);

        if ((index + 1) % this.teamSize === 0) {
          teams.push(currentTeam);
          currentTeam = [];
        }
      });

      return teams;
    }

    return [];
  }

  shuffle(array: any[]): any[] {
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
  }
}
