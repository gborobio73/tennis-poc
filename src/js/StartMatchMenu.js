/* global module */

var UI = require('ui');
var MatchWindow = require('MatchWindow');
var MatchScore = require('MatchScore');

var StartMatchMenu = function(){
  var menu = new UI.Menu({
    sections: [{
       title: 'Are you ready?',
       items: [{
        title: 'Yes',
        subtitle: 'Start match'
      }]
    }]
  });
  menu.on('select', function(e) {
    new MatchWindow(new MatchScore()).show();    
  });
  menu.on('back', function(e) {    
    menu.hide();
  });
  
  this.show = function(){
    menu.show();
  };
};

module.exports = StartMatchMenu;