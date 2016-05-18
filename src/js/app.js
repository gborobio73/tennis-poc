/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var MainMenu = require('MainMenu');
var MatchWindow = require('MatchWindow');
var MatchScore = require('MatchScore');

/*
var mainMenu = new MainMenu();
mainMenu.show();
*/
new MatchWindow(new MatchScore(1)).show();