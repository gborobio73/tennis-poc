/* global module */

var UI = require('ui');
var ServeMenu = require('ServeMenu');

var MainMenu = function(){
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'New match',
        icon: 'images/menu_icon.png',
        subtitle: 'Start a new match'
      }]
    }]
  });
  menu.on('select', function(e) {
    new ServeMenu().show();
  });
  this.show = function(){
    menu.show();
  };
};

module.exports = MainMenu;