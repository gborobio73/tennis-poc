/* global module */

var UI = require('ui');
var StartMatchMenu = require('StartMatchMenu');

var ServeMenu = function(){
  var menu = new UI.Menu({
    sections: [{
       title: 'Who starts serving?',
       items: [{
        title: 'Opponent',
        subtitle: 'Opponent serves'
      }, {
        title: 'You',
        subtitle: 'You serve'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    //console.log('The item is titled "' + e.item.title + '"');
    new StartMatchMenu(e.itemIndex).show();
  });
  this.show = function(){
    menu.show();
  };
};

module.exports = ServeMenu;