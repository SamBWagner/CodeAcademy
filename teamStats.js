/*teamStats.js is an exersize from CodeAcademy's Learn
 * JavaScript course.
 */
const team = {
    _players: [
      {
        firstName: "",
        lastName: "",
        age: 0,
      },
      {
        firstName: "",
        lastName: "",
        age: 0,
      },
      {
        firstName: "",
        lastName: "",
        age: 0,
      },
    ],
    _games: [
      {
        opponent: '',
        teamPoints: 0,
        opponentPoints: 0
      },
      {
        opponent: '',
        teamPoints: 0,
        opponentPoints: 0
      },
      {
        opponent: '',
        teamPoints: 0,
        opponentPoints: 0
      }
    ],
  
  
    get players() {
      return _players;
    },
  
    get games() {
      return _games;
    },
  
    //simple adder, no input validation
    addPlayer (newFirstName, newLastName, newAge) {
      this._players.push({firstName: newFirstName,lastName: newLastName, age: newAge});
    },
  
    //simple adder, no input validation
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      this._games.push({opponent:newOpponent, teamPoints:newTeamPoints, opponentPoints:newOpponentPoints});
    }
  };
  
  team.addPlayer('Christiano', 'Ronaldo', 31);
  team.addGame('Titans', 100, 98);
  console.log(team._players);
  console.log(team._games);
  