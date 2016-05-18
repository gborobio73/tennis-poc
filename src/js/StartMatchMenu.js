/* global module */

var UI = require('ui');
var MatchWindow = require('MatchWindow');
var MatchScore = require('MatchScore');

var StartMatchMenu = function(whoServes){
  this.whoServes = whoServes;
  
  var menu = new UI.Menu({
    sections: [{
       title: 'Are you ready?',
       items: [{
        title: 'Yes',
        subtitle: 'Start match'
      }]
    }]
  });
  
  self = this;
  menu.on('select', function(e) {
    new MatchWindow(new MatchScore(self.whoServes)).show();    
  });
  menu.on('back', function(e) {    
    menu.hide();
  });
  
  this.show = function(){
    menu.show();
  };
};

module.exports = StartMatchMenu;