/* global module */

var MatchScore = function(whoServes){    
  this.whoServes = whoServes;
  this.isTieBreak = false;
  this.matchIsOver=false;
  
  var scores =[];

  var opp =0;
  var you =1;
  
  this.sets = [0,0];
  this.games = [0,0];
  this.points= [0,0];

  this.opponentPoint = function(){
    point(opp, you);
    storeScore();
  };
  
  this.yourPoint = function(){
    point(you, opp);
    storeScore();
  };

  this.cancelLastPoint = function(){
    if (scores.length > 1) {
      scores.pop(); //remove last score     
      this.sets[opp] = scores[scores.length - 1].sets[opp];
      this.sets[you] = scores[scores.length - 1].sets[you];      
      this.games[opp] = scores[scores.length - 1].games[opp];
      this.games[you] = scores[scores.length - 1].games[you];
      this.points[opp] = scores[scores.length - 1].points[opp];
      this.points[you] = scores[scores.length - 1].points[you];
    }
  };
  
  var self = this;

  storeScore();

  function point(whoWon, whoLost){
    if(self.isTieBreak){
      if(self.points[whoWon] <= 5){
        self.points[whoWon]++;
      }else{
        if(self.points[whoWon] + 1 - self.points[whoLost] >=2){
          newGame(whoWon, whoLost);
        }else{
          self.points[whoWon]++;
        }
      }
    }else{
      if(self.points[whoWon] === 'Ad'){
        //end of the game - opp won
        console.log('end of the game - whoWon had Ad');
        newGame(whoWon, whoLost);
      }else if(self.points[whoWon] === 40){
        if(self.points[whoLost] === 40){
          console.log('Ad opponent');
          self.points[whoWon] ='Ad';
        }else if(self.points[whoLost] === 'Ad'){
          console.log('40 all');
          self.points[whoWon] = 40;
          self.points[whoLost] = 40;        
        }else{
          //end of the game        
          console.log('end of the game - who lost had 30 or less');        
          newGame(whoWon, whoLost);
        }      
      }else if(self.points[whoWon] === 30){
        self.points[whoWon] =40;
      }else if(self.points[whoWon] === 15){
        self.points[whoWon] =30;
      }else if(self.points[whoWon] === 0){
        self.points[whoWon] =15;
      }
    }    
  }
  
  function newGame(whoWon, whoLost){
    self.points= [0,0];
    self.isTieBreak = false;
    
    self.whoServes = 1 - self.whoServes;
      
    if(self.games[whoWon]  ===6)  {
      //its over? always?
      console.log('game over. start new set');
      newSet(whoWon, whoLost);
    }else if(self.games[whoWon]  === 5){
      if(self.games[whoLost] ===6){
        self.games[whoWon] ++;  
        self.isTieBreak = true;
        self.points= [0,0];
        console.log('is tiebreak');
      }else if(self.games[whoLost]  <=4){
        //its over
        console.log('game over. who lost had 4 or less games. start new set');
        newSet(whoWon, whoLost);
      }else{
        self.games[whoWon] ++;
      }
    }else{
      self.games[whoWon] ++;
    }
  }
  
  function newSet(whoWon, whoLost){
    self.points= [0,0];
    self.games= [0,0];
    self.isTieBreak = false;
    self.sets[whoWon]++;
    if(self.sets[whoWon] ===3){
      self.matchIsOver=true;
    }
  }

  function storeScore(){
    scores.push({
      "sets":[self.sets[opp], self.sets[you]], 
      "games": [self.games[opp], self.games[you]], 
      "points": [self.points[opp], self.points[you]]
    });
    console.log('scores:' + JSON.stringify(scores));
  }
};

module.exports = MatchScore;