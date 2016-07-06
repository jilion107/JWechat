/**
 * Created by jilion.chen on 2016/7/6.
 */
'use strict'

var settings = require('../settings');

module.exports = {
    getMenu: function(api, res) {
        api.getMenu(function(error, result) {// only menus created by API call
            var obj = JSON.stringify(result);
            console.log('Jwechat:' + obj);
            res.reply('');
        });
    },

    createMenu: function(api, res) {
        api.createMenu(settings.menu, function(error, result) {
            console.log('Jwechat:' + JSON.stringify(result));
            res.reply('');
        });
    },

    removeMenu: function(api, res) {
        api.createMenu(function(error, result) {
            console.log('Jwechat:' + JSON.stringify(result));
            res.reply('');
        });
    },

    getMenuConfig: function(api, res) {
        api.getMenuConfig(function(error, result) {// menus created by API call or web page
            var obj = JSON.stringify(result);
            console.log('Jwechat:' + obj);
            res.reply('');
        });
    },

    createCustomMenu: function(api, res) {
        api.createCustomMenu(settings.customMenu, function(error, result) {
            console.log('Jwechat:' + JSON.stringify(result));
            res.reply('');
        })
    },

    deleteCustomMenu: function(api, res, menuId) {
        api.removeCustomMenu(menuId, function(error, result) {
            console.log('Jwechat:' + JSON.stringify(result));
            res.reply('');
        })
    },

    testCustomMenu: function(api, res, userId) {
        api.testCustomMenu(userId, function(error, result) {
            console.log('Jwechat:' + JSON.stringify(result));
            res.reply('');
        })
    }
}