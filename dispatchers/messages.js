/**
 * Created by jilion.chen on 2016/7/4.
 */
"use strict";
var textMsgHandler = require('../handlers/textMsgHandler');
var imageMsgHandler = require('../handlers/imageMsgHandler');
var voiceMsgHandler = require('../handlers/voiceMsgHandler');
var videoMsgHandler = require('../handlers/videoMsgHandler');
var locationMsgHandler = require('../handlers/locationMsgHandler');
var shortvideoMsgHandler = require('../handlers/shortvideoMsgHandler');
var linkMsgHandler = require('../handlers/linkMsgHandler');
var eventHandler = require('../handlers/eventHandler');

var customServiceWrapper = require('../wrapper/customServiceWrapper');
var menuWrapper = require('../wrapper/menuWrapper');

let MSGTYPE = {
    TEXT: 'text',
    IMAGE: 'image',
    VOICE: 'voice',
    VIDEO: 'video',
    LOCATION: 'location',
    SHORTVIDEO: 'shortvideo',
    LINK: 'link',
    EVENT: 'event'

}

let APITYPE = {
    GETCSLIST: 'getCSList',
    ADDCS: 'addCS',
    GETMENU: 'getMenu',
    CREATEMENU: 'createMenu',
    REMOVEMENU: 'removeMenu',
    GETMENUCONFIG: 'getMenuConfig',
    CREATECUSTOMMENU: 'createCustomMenu',
    DELETECUSTOMMENU: 'deleteCustomMenu',
    TESTCUSTOMMENU: 'testCustomMenu'

}

var Msg = {
    parseMessage: function parseMessage(message) {
        console.log("++++++++ Start +++++++++");
        console.log("ToUserName: " + message.ToUserName);
        console.log("FromUserName: " + message.FromUserName);
        console.log("CreateTime: " + message.CreateTime);
        console.log("MsgType: " + message.MsgType);
        console.log("Content: " + message.Content);
        console.log("MsgId: " + message.MsgId);
        console.log("PicUrl: " + message.PicUrl);
        console.log("MediaId: " + message.MediaId);
        console.log("Format: " + message.Format);
        console.log("Recognition: " + message.Recognition);
        console.log("ThumbMediaId: " + message.ThumbMediaId);
        console.log("Location_X: " + message.Location_X);
        console.log("Location_Y: " + message.Location_Y);
        console.log("Scale: " + message.Scale);
        console.log("Label: " + message.Label);
        console.log("Title: " + message.Title);
        console.log("Description: " + message.Description);
        console.log("Url: " + message.Url);
        console.log("Event: " + message.Event);
        console.log("EventKey: " + message.EventKey);
        console.log("Ticket: " + message.Ticket);
        console.log("Latitude: " + message.Latitude);
        console.log("Longitude: " + message.Longitude);
        console.log("Precision: " + message.Precision);
        console.log("++++++++ End +++++++++");
    },

    dispatch: function dispatch(msgType, msg, res){
        switch (msgType) {
            case MSGTYPE.TEXT:
                textMsgHandler.handler(msg, res);
                break;
            case MSGTYPE.IMAGE:
                imageMsgHandler.handler(msg, res);
                break;
            case MSGTYPE.VOICE:
                voiceMsgHandler.handler(msg, res);
                break;
            case MSGTYPE.VIDEO:
                videoMsgHandler.handler(msg, res);
                break;
            case MSGTYPE.LOCATION:
                locationMsgHandler.handler(msg, res);
                break;
            case MSGTYPE.SHORTVIDEO:
                shortvideoMsgHandler.handler(msg, res);
                break;
            case MSGTYPE.LINK:
                linkMsgHandler.handler(msg, res);
                break;
            case MSGTYPE.EVENT:
                eventHandler.handler(msg, res);
                break;
            default:
                console.log(msgType);
        }
    },

    apiCall: function(api, msg, res) {
        switch (msg.Content) {
            case APITYPE.GETCSLIST:
                customServiceWrapper.getCSList(api, res);
                break;
            case APITYPE.ADDCS:
                customServiceWrapper.addCS(api, res);
                break;
            case APITYPE.CREATEMENU:
                menuWrapper.createMenu(api, res);
                break;
            case APITYPE.GETMENU:
                menuWrapper.getMenu(api, res);
                break;
            case APITYPE.REMOVEMENU:
                menuWrapper.removeMenu(api, res);
                break;
            case APITYPE.GETMENUCONFIG:
                menuWrapper.getMenuConfig(api, res);
                break;
            case APITYPE.CREATECUSTOMMENU:
                menuWrapper.createCustomMenu(api, res);
                break;
            case APITYPE.DELETECUSTOMMENU:
                menuWrapper.deleteCustomMenu(api, res, '415383810');
                break;
            case APITYPE.TESTCUSTOMMENU:
                menuWrapper.testCustomMenu(api, res, 'jilion_chen');
                break;
            default:
                Msg.dispatch(msg.MsgType, msg, res);
        }
    }
}

module.exports = Msg
