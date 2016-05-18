/* global module */

var MatchScore = function(whoServes){    
  this.whoServes = whoServes;
  this.isTieBreak = false;
  this.matchIsOver=false;
  var opp =0;
  var you =1;
  this.sets = [0,0];
  this.games = [0,0];
  this.points= [0,0];

  this.opponentPoint = function(){
    point(opp, you);
  };
  
  this.yourPoint = function(){
    point(you, opp);
  };
  
  /*
  this.opponentPoint = function(){
    
    if(this.isTieBreak){
      if(this.points[opp] <= 5){
        this.points[opp]++;
      }else{
        if(this.points[opp] + 1 - this.points[you] >=2){
          newGame(opp, you);
        }else{
          this.points[opp]++;
        }
      }
    }else{
      if(this.points[opp] === 'Ad'){
        //end of the game - opp won
        console.log('end of the game - opp won');
        newGame(opp, you);
      }else if(this.points[opp] === 40){
        if(this.points[you] === 40){
          console.log('Ad opponent');
          this.points[opp] ='Ad';
        }else if(this.points[you] === 'Ad'){
          console.log('40 all');
          this.points[opp] = 40;
          this.points[you] = 40;        
        }else{
          //end of the game - opp won        
          console.log('end of the game - opp won');        
          newGame(opp, you);
        }      
      }else if(this.points[opp] === 30){
        this.points[opp] =40;
      }else if(this.points[opp] === 15){
        this.points[opp] =30;
      }else if(this.points[opp] === 0){
        this.points[opp] =15;
      }
    }    
  };
  
  this.yourPoint = function(){
    if(this.isTieBreak){
      if(this.points[you] <= 5){
        this.points[you]++;
      }else{
        if(this.points[you] + 1 - this.points[opp] >=2){
          newGame(you, opp);
        }else{
          this.points[you]++;
        }
      }
    }else{
      if(this.points[you] === 'Ad'){
        //end of the game -> you won
        newGame(you, opp);
      }else if(this.points[you] === 40){
       if(this.points[opp] === 40){
         console.log('Ad you');
          this.points[you] ='Ad';
        }else if(this.points[opp] === 'Ad'){
          console.log('40 all');
          this.points[you] = 40;
          this.points[opp] = 40;        
        }else{
          //end of the game -> you won
          newGame(you, opp);
        }      
      }else if(this.points[you] === 30){
        this.points[you] =40;
      }else if(this.points[you] === 15){
        this.points[you] =30;
      }else if(this.points[you] === 0){
        this.points[you] =15;
      }
    }    
  };*/
  
  var self = this;
  
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
        console.log('end of the game - opp won');
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
          //end of the game - opp won        
          console.log('end of the game - opp won');        
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
        console.log('game over. start new set');
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
};

module.exports = MatchScore;