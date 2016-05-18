/* global module */

var UI = require('ui');
var Vector2 = require('vector2');

var MatchWindow = function(matchScore){
  this.matchScore = matchScore;
  
  var wind = new UI.Window({
    backgroundColor: 'black'
  });
  
  this.show = function(){    
    wind.add(buildOpponentPointLabel());
    wind.add(buildYourPointLabel());
    
    this.whoServes = buildWhoServesMark(this.matchScore.whoServes);
    
    wind.add(buildSetsLabel());
    wind.add(buildGamesLabel());
    wind.add(buildPointsLabel());
    wind.add(buildScoreLine());
    wind.add(buildBottomLine());
    wind.add(this.whoServes);
    
    this.oppPoints = new UI.Text({
      position: new Vector2(82, 51),
      size: new Vector2(40, 33),
      font: 'gothic-28',
      text: 0,
      borderColor: 'white',
      textAlign:'center'  
    });
    
    this.youPoints = new UI.Text({
      position: new Vector2(82, 84),
      size: new Vector2(40, 33),
      font: 'gothic-28',
      text: 0,
      borderColor: 'white',
      textAlign:'center'  
    });
    
    this.oppGames = new UI.Text({
      position: new Vector2(41, 51),
      size: new Vector2(40, 33),
      font: 'gothic-28',
      text: 0,
      borderColor: 'white',
      textAlign:'center'  
    });
    
    this.youGames = new UI.Text({
      position: new Vector2(41, 84),
      size: new Vector2(40, 33),
      font: 'gothic-28',
      text: 0,
      borderColor: 'white',
      textAlign:'center'  
    });
    
    this.oppSets = new UI.Text({
      position: new Vector2(0, 51),
      size: new Vector2(40, 33),
      font: 'gothic-28',
      text: 0,
      borderColor: 'white',
      textAlign:'center'  
    });
    
    this.youSets = new UI.Text({
      position: new Vector2(0, 84),
      size: new Vector2(40, 33),
      font: 'gothic-28',
      text: 0,
      borderColor: 'white',
      textAlign:'center'  
    });
    
    wind.add(this.oppPoints);
    wind.add(this.youPoints);
    wind.add(this.oppGames);
    wind.add(this.youGames);
    wind.add(this.oppSets);
    wind.add(this.youSets);
    wind.show();
    
    var self= this;
    wind.on('click', 'up', function() {
      self.matchScore.opponentPoint();      
      renderScore();      
    });
    
    wind.on('click','down', function() {            
      self.matchScore.yourPoint();      
      renderScore();      
    });
    
    wind.on('click','select', function() {            
      self.matchScore.cancelLastPoint();      
      renderScore();      
    });

    function renderScore(){
      self.oppPoints.text(self.matchScore.points[0]);      
      self.oppGames.text(self.matchScore.games[0]);      
      self.oppSets.text(self.matchScore.sets[0]);      
      
      self.youPoints.text(self.matchScore.points[1]);      
      self.youGames.text(self.matchScore.games[1]);      
      self.youSets.text(self.matchScore.sets[1]);      
      
      if(self.matchScore.whoServes === 0){
        self.whoServes.position(new Vector2(123, 51));
      }else{
        self.whoServes.position(new Vector2(123, 84));
      }
      
      if(self.matchScore.matchIsOver){
        
      }
    }
  };
};

function buildBottomLine(){
  return new UI.Line({
      position: new Vector2(0, 116),
      position2: new Vector2(144, 116),
      strokeColor: 'white',
    });
}

function buildScoreLine(){
  return new UI.Line({
      position: new Vector2(0, 50),
      position2: new Vector2(144, 50),
      strokeColor: 'white',
    });
}

function buildOpponentPointLabel(){
  return new UI.Text({
    position: new Vector2(81, 0),
    size: new Vector2(64, 25),
    font: 'gothic-14',
    text: 'Opponent',
    borderColor: 'white',
    textAlign:'right'
  });
}

function buildYourPointLabel(){
  return new UI.Text({
    position: new Vector2(81, 116),
    size: new Vector2(64, 25),
    font: 'gothic-14',
    text: 'You',
    borderColor: 'white',
    textAlign:'right'
  });
}

function buildSetsLabel(){
  return new UI.Text({
     position: new Vector2(0, 25),
     size: new Vector2(40, 25),
     font: 'gothic-14',
     text: 'Sets',
    borderColor: 'white',
    textAlign:'center'
  });
}

function buildGamesLabel(){
  return new UI.Text({
    position: new Vector2(41, 25),
    size: new Vector2(40, 25),
    font: 'gothic-14',
    text: 'Games',
    borderColor: 'white',
    textAlign:'center'
  });
}

function buildPointsLabel(){
  return new UI.Text({
    position: new Vector2(82, 25),
    size: new Vector2(40, 25),
    font: 'gothic-14',
    text: 'Points',
    borderColor: 'white',
    textAlign:'center'
  });
}

function buildWhoServesMark(whoServes){
  var whoServesMark = new UI.Text({
      size: new Vector2(24, 33),
      font: 'gothic-14',
      text: 'X',
      borderColor: 'white',
      textAlign:'center'
    });
    if(whoServes === 0){
      whoServesMark.position(new Vector2(123, 51));
    }else{
      whoServesMark.position(new Vector2(123, 84));
    }
  return whoServesMark;
}

module.exports = MatchWindow;